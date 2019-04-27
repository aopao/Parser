// pages/introduction/introduction.js
Page({
  data: {
    tagString: "{{tagStyle}}",
    tagStyle: {
      code: "font-style: italic; color: #005cc5;margin-left:3px;margin-right:3px;"
    },
    media: [{
      name: 'img',
      attrs: 'alt, src, height, width, ignore'
    }, {
      name: 'video',
      attrs: 'src, controls, loop, height, width'
    }, {
      name: 'audio',
      attrs: 'src, controls, loop, \nposter, name, author'
    }, {
      name: 'source',
      attrs: 'src（仅限用于video和audio中）'
    }],
    table: [{
      name: 'table',
      attrs: 'width'
    }, {
      name: 'thead'
    }, {
      name: 'tbody'
    }, {
      name: 'tfoot'
    }, {
      name: 'tr'
    }, {
      name: 'td',
      attrs: 'colspan, height, rowspan, width'
    }, {
      name: 'th',
      attrs: 'colspan, height, rowspan, width'
    }, {
      name: 'col',
      attrs: 'span, width'
    }, {
      name: 'colgroup',
      attrs: 'span, width'
    }, {
      name: 'ol',
      attrs: 'start, type'
    }, {
      name: 'ul'
    }, {
      name: 'li'
    }],
    text: [{
      name: 'a',
      attrs: 'href'
    }, {
      name: 'abbr'
    }, {
      name: 'b'
    }, {
      name: 'blockquote'
    }, {
      name: 'br'
    }, {
      name: 'center'
    }, {
      name: 'code'
    }, {
      name: 'dd'
    }, {
      name: 'del'
    }, {
      name: 'div',
      attrs: 'align'
    }, {
      name: 'dl'
    }, {
      name: 'dt'
    }, {
      name: 'em'
    }, {
      name: 'font',
      attrs: 'face, color'
    }, {
      name: 'h1'
    }, {
      name: 'h2'
    }, {
      name: 'h3'
    }, {
      name: 'h4'
    }, {
      name: 'h5'
    }, {
      name: 'h6'
    }, {
      name: 'hr'
    }, {
      name: 'i'
    }, {
      name: 'ins'
    }, {
      name: 'label'
    }, {
      name: 'p',
      attrs: 'align'
    }, {
      name: 'pre',
      attrs: 'language'
    }, {
      name: 'q'
    }, {
      name: 'section'
    }, {
      name: 'span'
    }, {
      name: 'strong'
    }, {
      name: 'sub'
    }, {
      name: 'sup'
    }, {
      name: 'u'
    }],
    default: [{
      name: 'html'
    }, {
      name: 'body'
    }, {
      name: 'style'
    }, {
      name: 'fieldset'
    }, {
      name: 'legend'
    }]
  }
})