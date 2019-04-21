//Tokenizer.js
var i = 0,
TEXT = i++,
BEFORE_TAG_NAME = i++,
IN_TAG_NAME = i++,
IN_SELF_CLOSING_TAG = i++,
BEFORE_CLOSING_TAG_NAME = i++,
IN_CLOSING_TAG_NAME = i++,
AFTER_CLOSING_TAG_NAME = i++,
//attributes
BEFORE_ATTRIBUTE_NAME = i++,
IN_ATTRIBUTE_NAME = i++,
AFTER_ATTRIBUTE_NAME = i++,
BEFORE_ATTRIBUTE_VALUE = i++,
IN_ATTRIBUTE_VALUE_DQ = i++, // "
IN_ATTRIBUTE_VALUE_SQ = i++, // '
IN_ATTRIBUTE_VALUE_NQ = i++,
//declarations
BEFORE_DECLARATION = i++, // !
IN_DECLARATION = i++,
//processing instructions
IN_PROCESSING_INSTRUCTION = i++, // ?
//special
BEFORE_ENTITY = i++, //&
BEFORE_NUMERIC_ENTITY = i++, //#
IN_NAMED_ENTITY = i++,
IN_NUMERIC_ENTITY = i++,
IN_HEX_ENTITY = i++; //X

function whitespace(c) {
  return /\s/.test(c);
}
function ifElseState(upper, SUCCESS, FAILURE) {
  var lower = upper.toLowerCase();
  if (upper === lower) {
    return function(c) {
      if (c === lower) {
        this._state = SUCCESS;
      } else {
        this._state = FAILURE;
        this._index--;
      }
    };
  } else {
    return function(c) {
      if (c === lower || c === upper) {
        this._state = SUCCESS;
      } else {
        this._state = FAILURE;
        this._index--;
      }
    };
  }
}

function Tokenizer(cbs) {
  this._state = TEXT;
  this._buffer = "";
  this._sectionStart = 0;
  this._index = 0;
  this._bufferOffset = 0;
  this._baseState = TEXT;
  this._cbs = cbs;
  this._running = true;
  this._ended = false;
}
Tokenizer.prototype._stateText = function(c) {
  if (c === "<") {
    if (this._index > this._sectionStart) {
      this._cbs.ontext(this._getSection());
    }
    this._state = BEFORE_TAG_NAME;
    this._sectionStart = this._index;
  }
};
Tokenizer.prototype._stateBeforeTagName = function(c) {
  if (c === "/") {
    this._state = BEFORE_CLOSING_TAG_NAME;
  } else if (c === "<") {
    this._cbs.ontext(this._getSection());
    this._sectionStart = this._index;
  } else if (c === ">" || whitespace(c)) {
    this._state = TEXT;
  } else if (c === "!") {
    this._state = BEFORE_DECLARATION;
    this._sectionStart = this._index + 1;
  } else if (c === "?") {
    this._state = IN_PROCESSING_INSTRUCTION;
    this._sectionStart = this._index + 1;
  } else {
    this._state = IN_TAG_NAME;
    this._sectionStart = this._index;
  }
};
Tokenizer.prototype._stateInTagName = function(c) {
  if (c === "/" || c === ">" || whitespace(c)) {
    this._emitToken("onopentagname");
    this._state = BEFORE_ATTRIBUTE_NAME;
    this._index--;
  }
};
Tokenizer.prototype._stateBeforeCloseingTagName = function(c) {
  if (whitespace(c));
  else if (c === ">") {
    this._state = TEXT;
  } else {
    this._state = IN_CLOSING_TAG_NAME;
    this._sectionStart = this._index;
  }
};
Tokenizer.prototype._stateInCloseingTagName = function(c) {
  if (c === ">" || whitespace(c)) {
    this._emitToken("onclosetag");
    this._state = AFTER_CLOSING_TAG_NAME;
    this._index--;
  }
};
Tokenizer.prototype._stateAfterCloseingTagName = function(c) {
  if (c === ">") {
    this._state = TEXT;
    this._sectionStart = this._index + 1;
  }
};
Tokenizer.prototype._stateBeforeAttributeName = function(c) {
  if (c === ">") {
    this._cbs.onopentagend();
    this._state = TEXT;
    this._sectionStart = this._index + 1;
  } else if (c === "/") {
    this._state = IN_SELF_CLOSING_TAG;
  } else if (!whitespace(c)) {
    this._state = IN_ATTRIBUTE_NAME;
    this._sectionStart = this._index;
  }
};
Tokenizer.prototype._stateInSelfClosingTag = function(c) {
  if (c === ">") {
    this._cbs.onopentagend(); 
    this._state = TEXT;
    this._sectionStart = this._index + 1;
  } else if (!whitespace(c)) {
    this._state = BEFORE_ATTRIBUTE_NAME;
    this._index--;
  }
};
Tokenizer.prototype._stateInAttributeName = function(c) {
  if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
    this._cbs.onattribname(this._getSection());
    this._sectionStart = -1;
    this._state = AFTER_ATTRIBUTE_NAME;
    this._index--;
  }
};
Tokenizer.prototype._stateAfterAttributeName = function(c) {
  if (c === "=") {
    this._state = BEFORE_ATTRIBUTE_VALUE;
  } else if (c === "/" || c === ">") {
    this._cbs.onattribend();
    this._state = BEFORE_ATTRIBUTE_NAME;
    this._index--;
  } else if (!whitespace(c)) {
    this._cbs.onattribend();
    this._state = IN_ATTRIBUTE_NAME;
    this._sectionStart = this._index;
  }
};
Tokenizer.prototype._stateBeforeAttributeValue = function(c) {
  if (c === '"') {
    this._state = IN_ATTRIBUTE_VALUE_DQ;
    this._sectionStart = this._index + 1;
  } else if (c === "'") {
    this._state = IN_ATTRIBUTE_VALUE_SQ;
    this._sectionStart = this._index + 1;
  } else if (!whitespace(c)) {
    this._state = IN_ATTRIBUTE_VALUE_NQ;
    this._sectionStart = this._index;
    this._index--; //reconsume token
  }
};
Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function(c) {
  if (c === '"') {
    this._emitToken("onattribdata");
    this._cbs.onattribend();
    this._state = BEFORE_ATTRIBUTE_NAME;
  }
};
Tokenizer.prototype._stateInAttributeValueSingleQuotes = function(c) {
  if (c === "'") {
    this._emitToken("onattribdata");
    this._cbs.onattribend();
    this._state = BEFORE_ATTRIBUTE_NAME;
  }
};
Tokenizer.prototype._stateInAttributeValueNoQuotes = function(c) {
  if (whitespace(c) || c === ">") {
    this._emitToken("onattribdata");
    this._cbs.onattribend();
    this._state = BEFORE_ATTRIBUTE_NAME;
    this._index--;
  }
};
Tokenizer.prototype._stateBeforeDeclaration = function(c) {
  this._state = IN_DECLARATION;
};
Tokenizer.prototype._stateInDeclaration = function(c) {
  if (c === ">") {
    this._cbs.ondeclaration(this._getSection());
    this._state = TEXT;
    this._sectionStart = this._index + 1;
  }
};
Tokenizer.prototype._stateInProcessingInstruction = function(c) {
  if (c === ">") {
    this._cbs.onprocessinginstruction(this._getSection());
    this._state = TEXT;
    this._sectionStart = this._index + 1;
  }
};
Tokenizer.prototype._stateBeforeEntity = ifElseState(
  "#",
  BEFORE_NUMERIC_ENTITY,
  IN_NAMED_ENTITY
);
Tokenizer.prototype._stateBeforeNumericEntity = ifElseState(
  "X",
  IN_HEX_ENTITY,
  IN_NUMERIC_ENTITY
);
Tokenizer.prototype._stateInNamedEntity = function(c) {
  if (c === ";") {
    this._parseNamedEntityStrict();
    if (this._sectionStart + 1 < this._index) {
      this._parseLegacyEntity();
    }
    this._state = this._baseState;
  } else if (
    (c < "a" || c > "z") &&
    (c < "A" || c > "Z") &&
    (c < "0" || c > "9")
  ) {
    if (this._sectionStart + 1 === this._index);
    else if (this._baseState !== TEXT) {
      if (c !== "=") {
        this._parseNamedEntityStrict();
      }
    } else {
      this._parseLegacyEntity();
    }
    this._state = this._baseState;
    this._index--;
  }
};
Tokenizer.prototype._decodeNumericEntity = function(offset, base) {
  var sectionStart = this._sectionStart + offset;
  if (sectionStart !== this._index) {
    var entity = this._buffer.substring(sectionStart, this._index);
    var parsed = parseInt(entity, base);
    this._emitPartial(parsed);
    this._sectionStart = this._index;
  } else {
    this._sectionStart--;
  }
  this._state = this._baseState;
};
Tokenizer.prototype._stateInNumericEntity = function(c) {
  if (c === ";") {
    this._decodeNumericEntity(2, 10);
    this._sectionStart++;
  } else if (c < "0" || c > "9") {
    this._decodeNumericEntity(2, 10);
    this._index--;
  }
};
Tokenizer.prototype._stateInHexEntity = function(c) {
  if (c === ";") {
    this._decodeNumericEntity(3, 16);
    this._sectionStart++;
  } else if (
    (c < "a" || c > "f") &&
    (c < "A" || c > "F") &&
    (c < "0" || c > "9")
  ) {
    this._decodeNumericEntity(3, 16);
    this._index--;
  }
};
Tokenizer.prototype._cleanup = function() {
  if (this._sectionStart < 0) {
    this._buffer = "";
    this._bufferOffset += this._index;
    this._index = 0;
  } else if (this._running) {
    if (this._state === TEXT) {
      if (this._sectionStart !== this._index) {
        this._cbs.ontext(this._buffer.substr(this._sectionStart));
      }
      this._buffer = "";
      this._bufferOffset += this._index;
      this._index = 0;
    } else if (this._sectionStart === this._index) {
      this._buffer = "";
      this._bufferOffset += this._index;
      this._index = 0;
    } else {
      this._buffer = this._buffer.substr(this._sectionStart);
      this._index -= this._sectionStart;
      this._bufferOffset += this._sectionStart;
    }
    this._sectionStart = 0;
  }
};
Tokenizer.prototype.write = function(chunk) {
  if (this._ended) this._cbs.onerror(Error(".write() after done!"));
  this._buffer += chunk;
  this._parse();
};
Tokenizer.prototype._parse = function() {
  while (this._index < this._buffer.length && this._running) {
    var c = this._buffer.charAt(this._index);
    if (this._state === TEXT) {
      this._stateText(c);
    } else if (this._state === BEFORE_TAG_NAME) {
      this._stateBeforeTagName(c);
    } else if (this._state === IN_TAG_NAME) {
      this._stateInTagName(c);
    } else if (this._state === BEFORE_CLOSING_TAG_NAME) {
      this._stateBeforeCloseingTagName(c);
    } else if (this._state === IN_CLOSING_TAG_NAME) {
      this._stateInCloseingTagName(c);
    } else if (this._state === AFTER_CLOSING_TAG_NAME) {
      this._stateAfterCloseingTagName(c);
    } else if (this._state === IN_SELF_CLOSING_TAG) {
      this._stateInSelfClosingTag(c);
    }//attributes 
    else if (this._state === BEFORE_ATTRIBUTE_NAME) {
      this._stateBeforeAttributeName(c);
    } else if (this._state === IN_ATTRIBUTE_NAME) {
      this._stateInAttributeName(c);
    } else if (this._state === AFTER_ATTRIBUTE_NAME) {
      this._stateAfterAttributeName(c);
    } else if (this._state === BEFORE_ATTRIBUTE_VALUE) {
      this._stateBeforeAttributeValue(c);
    } else if (this._state === IN_ATTRIBUTE_VALUE_DQ) {
      this._stateInAttributeValueDoubleQuotes(c);
    } else if (this._state === IN_ATTRIBUTE_VALUE_SQ) {
      this._stateInAttributeValueSingleQuotes(c);
    } else if (this._state === IN_ATTRIBUTE_VALUE_NQ) {
      this._stateInAttributeValueNoQuotes(c);
    }//declarations 
    else if (this._state === BEFORE_DECLARATION) {
      this._stateBeforeDeclaration(c);
    } else if (this._state === IN_DECLARATION) {
      this._stateInDeclaration(c);
    }//processing instructions 
    else if (this._state === IN_PROCESSING_INSTRUCTION) {
      this._stateInProcessingInstruction(c);
    }//entities
    else if (this._state === BEFORE_ENTITY) {
      this._stateBeforeEntity(c);
    } else if (this._state === BEFORE_NUMERIC_ENTITY) {
      this._stateBeforeNumericEntity(c);
    } else if (this._state === IN_NAMED_ENTITY) {
      this._stateInNamedEntity(c);
    } else if (this._state === IN_NUMERIC_ENTITY) {
      this._stateInNumericEntity(c);
    } else if (this._state === IN_HEX_ENTITY) {
      this._stateInHexEntity(c);
    } else {
      console.log(this._state)
      this._cbs.onerror(Error("unknown _state"), this._state);
    }
    this._index++;
  }
  this._cleanup();
};
Tokenizer.prototype.end = function(chunk) {
  if (this._ended) this._cbs.onerror(Error(".end() after done!"));
  if (chunk) this.write(chunk);
  this._ended = true;
  if (this._running) this._finish();
};
Tokenizer.prototype._finish = function() {
  if (this._sectionStart < this._index) {
    this._handleTrailingData();
  }
  this._cbs.onend();
};
Tokenizer.prototype._handleTrailingData = function() {
  var data = this._buffer.substr(this._sectionStart);
  if (this._state === IN_NAMED_ENTITY) {
    this._parseLegacyEntity();
    if (this._sectionStart < this._index) {
      this._state = this._baseState;
      this._handleTrailingData();
    }
  } else if (this._state === IN_NUMERIC_ENTITY) {
    this._decodeNumericEntity(2, 10);
    if (this._sectionStart < this._index) {
      this._state = this._baseState;
      this._handleTrailingData();
    }
  } else if (this._state === IN_HEX_ENTITY) {
    this._decodeNumericEntity(3, 16);
    if (this._sectionStart < this._index) {
      this._state = this._baseState;
      this._handleTrailingData();
    }
  } else if (
    this._state !== IN_TAG_NAME &&
    this._state !== BEFORE_ATTRIBUTE_NAME &&
    this._state !== BEFORE_ATTRIBUTE_VALUE &&
    this._state !== AFTER_ATTRIBUTE_NAME &&
    this._state !== IN_ATTRIBUTE_NAME &&
    this._state !== IN_ATTRIBUTE_VALUE_SQ &&
    this._state !== IN_ATTRIBUTE_VALUE_DQ &&
    this._state !== IN_ATTRIBUTE_VALUE_NQ &&
    this._state !== IN_CLOSING_TAG_NAME
  ) {
    this._cbs.ontext(data);
  }
};
Tokenizer.prototype.getAbsoluteIndex = function () {
  return this._bufferOffset + this._index;
};
Tokenizer.prototype._getSection = function() {
  return this._buffer.substring(this._sectionStart, this._index);
};
Tokenizer.prototype._emitToken = function(name) {
  this._cbs[name](this._getSection());
  this._sectionStart = -1;
};
Tokenizer.prototype._emitPartial = function(value) {
  if (this._baseState !== TEXT) {
    this._cbs.onattribdata(value);
  } else {
    this._cbs.ontext(value);
  }
};
module.exports = Tokenizer;