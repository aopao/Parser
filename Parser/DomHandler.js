//DomHandler.js
var Common = 1, Rich = 2;
var trustTag = {
  a: Rich,
  abbr: Common,
  audio: Rich,
  b: Common,
  blockquote: Common,
  body: Common,
  br: Rich,
  code: Rich,
  col: Rich,
  colgroup: Rich,
  dd: Common,
  del: Common,
  div: Common,
  dl: Common,
  dt: Common,
  em: Common,
  fieldset: Common,
  font: Common,
  h1: Rich,
  h2: Rich,
  h3: Rich,
  h4: Rich,
  h5: Rich,
  h6: Rich,
  hr: Rich,
  i: Common,
  img: Common,
  ins: Common,
  label: Common,
  legend: Common,
  li: Rich,
  ol: Rich,
  p: Common,
  pre: Rich,
  q: Common,
  source: Rich,
  span: Common,
  strong: Common,
  sub: Rich,
  sup: Rich,
  table: Rich,
  tbody: Rich,
  td: Rich,
  tfoot: Rich,
  th: Rich,
  thead: Rich,
  tr: Rich,
  u: Common,
  ul: Rich,
  video: Common
}
var ignoreTag = {
  head: true,
  area: true,
  base: true,
  basefont: true,
  command: true,
  embed: true,
  iframe: true,
  frame: true,
  input: true,
  textarea: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  track: true,
  wbr: true,
  path: true,
  circle: true,
  ellipse: true,
  line: true,
  rect: true,
  use: true,
  stop: true,
  polyline: true,
  polygon: true,
  map: true,
  canvas: true,
}

function DomHandler(style, tagStyle) {
  this.imgList = [];
  this.nodes = [];
  this._style = ParseClass(style, tagStyle || {});
  this._tagStack = [];
}
function ParseClass(style, options) {
  if (style) {
    var classes = style.match(/[\.\#]*[^@\[\]]+?{[\s\S]*?\}/g);
    if (classes) {
      for (var item of classes) {
        var Class = item.match(/^\s*\.(\S+?)[\s\.\#\{]/);
        if (Class) {
          options['.' + Class[1]] = item.match(/\{([\s\S]*?)\}/)[1];
          continue;
        }
        var name = item.match(/^\s*?([^\.\#\s]+?)[\s\.\#\{]/);
        if (name) {
          options[name[1]] = item.match(/\{([\s\S]*?)\}/)[1];
          continue;
        }
        var id = item.match(/^\s*\#(\S+?)[\s\.\#\{]/);
        if (id) options['#' + id[1]] = item.match(/\{([\s\S]*?)\}/)[1];
      }
    }
  }
  if (!options.blockquote) options.blockquote = 'background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px';
  if (!options.code) options.code = 'padding:0 1px 0 1px;margin-left:2px;margin-right:2px;background-color:#f8f8f8;border:1px solid #cccccc;border-radius:3px';
  return options;
}
DomHandler.prototype._addDomElement = function(element) {
  var parent = this._tagStack[this._tagStack.length - 1];
  var siblings = parent ? parent.children : this.nodes;
  siblings.push(element);
};
DomHandler.prototype.onopentag = function(name, attrs) {
  if (ignoreTag[name]) return;
  if (this._style[name]) attrs.style += (';' + this._style[name]);
  if (this._style['.' + attrs.class]) attrs.style += (';' + this._style['.' + attrs.class]);
  if (this._style['#' + attrs.id]) attrs.style += (';' + this._style['#' + attrs.id]);
  if (!trustTag[name]) name = 'div';
  switch (name) {
    case 'div': case 'p':
      if (attrs.align){
        attrs.style+=(';text-align:'+attrs.align);
        delete attrs.align;
      }
      break;
    case 'img':
      if (!attrs.hasOwnProperty('ignore')) {
        this.imgList.push(attrs.src)
        for (var item of this._tagStack) {
          if (trustTag[item.name] == Common) item.continue = true;
        }
      };
      attrs.style = 'max-width:100%;' + attrs.style;
      break;
    case 'font':
      name = 'span';
      if (attrs.color) {
        attrs.style += (';color:' + attrs.color);
        delete attrs.color;
      }
      if (attrs.face) {
        attrs.style += (";font-family:" + attrs.face);
        delete attrs.face;
      }
      break;
    case 'a':
      for (var item of this._tagStack) {
        if (trustTag[item.name] == Common) item.continue = true;
      }
      attrs.style = 'color:#366092;' + attrs.style;
      break;
    case 'table':
      if (attrs.align) {
        attrs.style += (';text-align:' + attrs.align);
        delete attrs.align;
      }
      for (var item of this._tagStack) {
        if (trustTag[item.name] == Common) item.continue = true;
      }
      break;
    case 'video': case 'audio':
      attrs.loop = attrs.hasOwnProperty('loop');
      attrs.controls = attrs.hasOwnProperty('controls');
      for (var item of this._tagStack) {
        if (trustTag[item.name] == Common) item.continue = true;
      }
      break;
    case 'source':
      var parent = this._tagStack[this._tagStack.length - 1];
      if (parent && (parent.name == 'video' || parent.name == 'audio')) parent.attrs.src = attrs.src;
      return;
    case 'center':
      name = 'div';
      attrs.style = 'text-align:center;' + attrs.style;
      break;
    case 'pre':
      attrs.style = 'background-color:#f6f8fa;padding:5px;margin:5px 0 5px 0;border-radius:5px;font-family:monospace;white-space: pre-line;' + attrs.style;
      for (var item of this._tagStack) {
        if (trustTag[item.name] == Common) item.continue = true;
      }
      break;
    case 'u':
      name = 'span';
      attrs.style = 'text-decoration:underline;' + attrs.style;
      break;
  }
  var element = {
    name: name,
    attrs: attrs,
    children: []
  };
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
  if (!ignoreTag[name]) this._tagStack.pop();
};
module.exports = DomHandler;