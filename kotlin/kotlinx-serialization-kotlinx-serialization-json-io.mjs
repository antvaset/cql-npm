import {
  encodeByWriter108llwage8l5s as encodeByWriter,
  Companion_instance1lcsd7h1e6cgu as Companion_instance,
  get_ESCAPE_STRINGS1nxou3xdkbswr as get_ESCAPE_STRINGS,
} from './kotlinx-serialization-kotlinx-serialization-json.mjs';
import {
  Unit_instance1fbcbse1fwigr as Unit_instance,
  protoOf180f3jzyo7rfj as protoOf,
  Char__toInt_impl_vasixd1agw9q2fuvclj as Char__toInt_impl_vasixd,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charCodeAt1yspne1d8erbm as charCodeAt,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
} from './kotlin-kotlin-stdlib.mjs';
import {
  writeCodePointValue2pd8kfyv5jtgh as writeCodePointValue,
  writeString33ca4btrgctw7 as writeString,
} from './kotlinx-io-kotlinx-io-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(JsonToIoStreamWriter, 'JsonToIoStreamWriter');
//endregion
function encodeToSink(_this__u8e3s4, serializer, value, sink) {
  var writer = new JsonToIoStreamWriter(sink);
  try {
    encodeByWriter(_this__u8e3s4, writer, serializer, value);
  }finally {
    writer.x1p();
  }
}
function JsonToIoStreamWriter(sink) {
  this.w1p_1 = sink;
}
protoOf(JsonToIoStreamWriter).e1g = function (value) {
  this.a1g(value.toString());
};
protoOf(JsonToIoStreamWriter).y1f = function (char) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(char);
  writeCodePointValue(this.w1p_1, tmp$ret$0);
};
protoOf(JsonToIoStreamWriter).a1g = function (text) {
  writeString(this.w1p_1, text);
};
protoOf(JsonToIoStreamWriter).k1g = function (text) {
  writeCodePointValue(this.w1p_1, 34);
  // Inline function 'kotlinx.serialization.json.internal.Companion.doWriteEscaping' call
  var lastPos = 0;
  var inductionVariable = 0;
  var last = charSequenceLength(text) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charCodeAt(text, i);
      var c = Char__toInt_impl_vasixd(this_0);
      if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
        var start = lastPos;
        writeString(this.w1p_1, text, start, i);
        var escape = ensureNotNull(get_ESCAPE_STRINGS()[c]);
        var end = escape.length;
        writeString(this.w1p_1, escape, 0, end);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  var tmp2 = lastPos;
  var end_0 = text.length;
  writeString(this.w1p_1, text, tmp2, end_0);
  writeCodePointValue(this.w1p_1, 34);
};
protoOf(JsonToIoStreamWriter).x1p = function () {
};
//region block: exports
export {
  encodeToSink as encodeToSink161va4wt8a44b,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-io.mjs.map
