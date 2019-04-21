//DomHandler.js
var richElements = {
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  table: true,
  tbody: true,
  tr: true,
  td: true,
  ol: true,
  ul: true,
  li: true,
  a: true,
  code: true,
  sub: true,
  sup: true,
  del: true,
  ins: true
};

function DomHandler(style, options) {
  this.imgList = [];
  this.nodes = [];
  this._style = ParseClass(style, options ? options.tagStyle || {} : {});
  this._preview = options ? options.preview : true;
  this._selectable = options ? options.selectable : true;
  this._tagStack = [];
}

function ParseClass(style, options) {
  if (style) {
    var classes = style.match(/[\.\#]*[^@\[\]]+?{[\s\S]*?\}/g);
    if (classes) {
      for (var item of classes) {
        var name = item.match(/^\s*?([^\.\#\s]+?)[\s\.\#\{]/);
        if (name) {
          options[name[1]] = item.match(/\{([\s\S]*?)\}/)[1];
          continue;
        }
        var id = item.match(/^\s*\#(\S+?)[\s\.\#\{]/);
        if (id) {
          options['#' + id[1]] = item.match(/\{([\s\S]*?)\}/)[1];
          continue;
        }
        var Class = item.match(/^\s*\.(\S+?)[\s\.\#\{]/);
        if (Class) {
          options['.' + Class[1]] = item.match(/\{([\s\S]*?)\}/)[1];
        }
      }
    }
  }
  if (!options.a) options.a = 'color:#366092';
  if (!options.img) options.img = 'max-width:100%';
  if (!options.blockquote) options.blockquote = 'background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px';
  if (!options.code) options.code = 'padding:1px;margin-left:2px;margin-right:2px;color:#262626;background-color:#f8f8f8;border:1px solid #cccccc;border-radius:3px;';
  return options;
}
DomHandler.prototype._addDomElement = function(element) {
  var parent = this._tagStack[this._tagStack.length - 1];
  var siblings = parent ? parent.children : this.nodes;
  siblings.push(element);
};
DomHandler.prototype.onopentag = function(name, attrs) {
  if (name === 'html') return;
  var properties = {
    name: name,
    attrs: attrs,
    children: []
  };
  if (!properties.attrs.hasOwnProperty('style')) properties.attrs.style = '';
  if (this._style[properties.name]) properties.attrs.style += (';' + this._style[properties.name]);
  if (this._style['.' + properties.attrs.class]) properties.attrs.style += (';' + this._style['.' + properties.attrs.class]);
  if (this._style['#' + properties.attrs.id]) properties.attrs.style += (';' + this._style['#' + properties.attrs.id]);
  if (name === 'img' && !attrs.hasOwnProperty('ignore')) this.imgList.push(properties.attrs.src);
  else if (name == 'section' || name == 'body') properties.name = 'div';
  else if (name == 'font') {
    properties.name = 'span';
    if (properties.attrs.color) properties.attrs.style += (';color:' + properties.attrs.color);
    if (properties.attrs.face) properties.attrs.style += (';font-family:' + properties.attrs.face);
  }
  var element = properties;
  this._addDomElement(element);
  this._tagStack.push(element);
};
DomHandler.prototype.ontext = function(data) {
  var lastTag;
  if (!this._tagStack.length && this.nodes.length && (lastTag = this.nodes[this.nodes.length - 1]).type === 'text') {
    lastTag.data += data;
  } else {
    if (
      this._tagStack.length &&
      (lastTag = this._tagStack[this._tagStack.length - 1]) &&
      (lastTag = lastTag.children[lastTag.children.length - 1]) &&
      lastTag.type === 'text'
    ) {
      lastTag.data += data;
    } else {
      var element = {
        text: data,
        type: 'text'
      };
      this._addDomElement(element);
    }
  }
};
DomHandler.prototype.onclosetag = function(name) {
  if (name == 'html') return;
  var elem = this._tagStack.pop();
  if (((name == 'img' && this._preview) || name == 'video' || name == 'audio' || name == 'table' || (name == 'a' && this._selectable)) && !elem.attrs.hasOwnProperty('ignore')) {
    for (var item of this._tagStack) {
      if (!(item.name in richElements)) item.continue = true;
    }
  }
};
module.exports = DomHandler;