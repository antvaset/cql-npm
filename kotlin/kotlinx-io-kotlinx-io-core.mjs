import {
  IndexOutOfBoundsException_init_$Create$2w5dv25cjssuw as IndexOutOfBoundsException_init_$Create$,
  Long2qws0ah9gnpki as Long,
  IllegalArgumentException_init_$Create$3ewkh27kzt8z8 as IllegalArgumentException_init_$Create$,
  charArray2ujmm1qusno00 as charArray,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  concatToString3cxf0c1gqonpo as concatToString,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  protoOf180f3jzyo7rfj as protoOf,
  toString1pkumu07cwy4m as toString,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  toLongw1zpgk99d84b as toLong,
  StringBuilder_init_$Create$2ujvu6cqvzuyn as StringBuilder_init_$Create$,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalStateException_init_$Create$2w9444nebyjns as IllegalStateException_init_$Create$,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  arrayCopytctsywo3h7gj as arrayCopy,
  IllegalArgumentException_init_$Create$3vjwoodhlckbo as IllegalArgumentException_init_$Create$_0,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  charCodeAt1yspne1d8erbm as charCodeAt,
  Char__toInt_impl_vasixd1agw9q2fuvclj as Char__toInt_impl_vasixd,
  toByte4i43936u611k as toByte,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  StringBuilder_init_$Create$2qsge4ydj6bin as StringBuilder_init_$Create$_0,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  endsWith278181ii8uuo as endsWith,
  startsWith26w8qjqapeeq6 as startsWith,
  substringiqarkczpya5m as substring,
  numberToChar93r9buh19yek as numberToChar,
  Exception_init_$Init$7nmtst2tre47 as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  Exception_init_$Init$33ewqhqmjrfx6 as Exception_init_$Init$_0,
  Exception_init_$Init$393utbttlf2x4 as Exception_init_$Init$_1,
  Exceptiondt2hlxn7j7vw as Exception,
  KProperty02ce7r476m8633 as KProperty0,
  getPropertyCallableRef1ajb9in178r5r as getPropertyCallableRef,
  UnsupportedOperationException_init_$Create$2py9d3liytkkq as UnsupportedOperationException_init_$Create$,
  lazy2hsh8ze7j6ikd as lazy,
  ArrayList_init_$Create$149jv2ovkkvnt as ArrayList_init_$Create$,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  Char19o2r8palgjof as Char,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForClass(Buffer, 'Buffer', Buffer);
initMetadataForClass(RealSink, 'RealSink');
initMetadataForClass(RealSource, 'RealSource');
initMetadataForCompanion(Companion);
initMetadataForClass(Segment, 'Segment');
initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker', VOID, SegmentCopyTracker);
function sink$default(path, append, $super) {
  append = append === VOID ? false : append;
  return $super === VOID ? this.qq(path, append) : $super.qq.call(this, path, append);
}
initMetadataForInterface(FileSystem, 'FileSystem');
initMetadataForClass(SystemFileSystemImpl, 'SystemFileSystemImpl', VOID, VOID, [FileSystem]);
initMetadataForClass(FileMetadata, 'FileMetadata', FileMetadata);
initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
initMetadataForClass(SegmentReadContextImpl$1);
initMetadataForClass(SegmentWriteContextImpl$1);
initMetadataForClass(BufferIterationContextImpl$1);
initMetadataForClass(IOException, 'IOException', IOException_init_$Create$, Exception);
initMetadataForClass(EOFException, 'EOFException', EOFException_init_$Create$, IOException);
initMetadataForObject(SegmentPool, 'SegmentPool');
initMetadataForClass(FileNotFoundException, 'FileNotFoundException', VOID, IOException);
initMetadataForClass(SystemFileSystem$1, VOID, VOID, SystemFileSystemImpl);
initMetadataForClass(Path_1, 'Path');
initMetadataForClass(FileSource, 'FileSource');
initMetadataForClass(FileSink, 'FileSink');
//endregion
function get_HEX_DIGIT_CHARS() {
  _init_properties__Util_kt__g8tcl9();
  return HEX_DIGIT_CHARS;
}
var HEX_DIGIT_CHARS;
function checkBounds(size, startIndex, endIndex) {
  _init_properties__Util_kt__g8tcl9();
  if (startIndex.a1(new Long(0, 0)) < 0 || endIndex.a1(size) > 0) {
    throw IndexOutOfBoundsException_init_$Create$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
  if (startIndex.a1(endIndex) > 0) {
    throw IllegalArgumentException_init_$Create$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
  }
}
function checkOffsetAndCount(size, offset, byteCount) {
  _init_properties__Util_kt__g8tcl9();
  if (offset.a1(new Long(0, 0)) < 0 || offset.a1(size) > 0 || size.h3(offset).a1(byteCount) < 0 || byteCount.a1(new Long(0, 0)) < 0) {
    throw IllegalArgumentException_init_$Create$('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
}
function toHexString(_this__u8e3s4) {
  _init_properties__Util_kt__g8tcl9();
  if (_this__u8e3s4 === 0)
    return '0';
  var result = charArray(8);
  result[0] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 >> 28 & 15];
  result[1] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 >> 24 & 15];
  result[2] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 >> 20 & 15];
  result[3] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 >> 16 & 15];
  result[4] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 >> 12 & 15];
  result[5] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 >> 8 & 15];
  result[6] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 >> 4 & 15];
  result[7] = get_HEX_DIGIT_CHARS()[_this__u8e3s4 & 15];
  var i = 0;
  $l$loop: while (i < result.length && result[i] === _Char___init__impl__6a9atx(48)) {
    i = i + 1 | 0;
  }
  return concatToString(result, i, result.length);
}
var properties_initialized__Util_kt_67kc5b;
function _init_properties__Util_kt__g8tcl9() {
  if (!properties_initialized__Util_kt_67kc5b) {
    properties_initialized__Util_kt_67kc5b = true;
    // Inline function 'kotlin.charArrayOf' call
    HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
  }
}
function Buffer() {
  this.fo_1 = null;
  this.go_1 = null;
  this.ho_1 = new Long(0, 0);
}
protoOf(Buffer).j = function () {
  return this.ho_1;
};
protoOf(Buffer).io = function () {
  return this;
};
protoOf(Buffer).jo = function () {
  return this.j().equals(new Long(0, 0));
};
protoOf(Buffer).ko = function (byteCount) {
  // Inline function 'kotlin.require' call
  if (!(byteCount.a1(new Long(0, 0)) >= 0)) {
    var message = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.j().a1(byteCount) < 0) {
    throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + this.j().toString() + ', required: ' + byteCount.toString() + ')');
  }
};
protoOf(Buffer).lo = function (byteCount) {
  // Inline function 'kotlin.require' call
  if (!(byteCount.a1(new Long(0, 0)) >= 0)) {
    var message = 'byteCount: ' + byteCount.toString() + ' < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return this.j().a1(byteCount) >= 0;
};
protoOf(Buffer).mo = function () {
  return Unit_instance;
};
protoOf(Buffer).no = function () {
  var result = this.j();
  if (result.equals(new Long(0, 0)))
    return new Long(0, 0);
  var tail = ensureNotNull(this.go_1);
  if (tail.qo_1 < 8192 && tail.so_1) {
    result = result.h3(toLong(tail.qo_1 - tail.po_1 | 0));
  }
  return result;
};
protoOf(Buffer).i2 = function () {
  return this.vo(this.j());
};
protoOf(Buffer).vo = function (byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  if (!(byteCount.a1(new Long(0, 0)) >= 0)) {
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var remainingByteCount = byteCount;
  while (remainingByteCount.a1(new Long(0, 0)) > 0) {
    var tmp0_elvis_lhs = this.fo_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw EOFException_init_$Create$_0('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp0 = remainingByteCount;
    // Inline function 'kotlinx.io.minOf' call
    var b = head.qo_1 - head.po_1 | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b_0 = toLong(b);
    var toSkip = (tmp0.a1(b_0) <= 0 ? tmp0 : b_0).c1();
    this.ho_1 = this.ho_1.h3(toLong(toSkip));
    remainingByteCount = remainingByteCount.h3(toLong(toSkip));
    head.po_1 = head.po_1 + toSkip | 0;
    if (head.po_1 === head.qo_1) {
      this.wo();
    }
  }
};
protoOf(Buffer).xo = function (sink, startIndex, endIndex) {
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  var tmp0_elvis_lhs = this.fo_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return -1;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var s = tmp;
  var tmp0 = endIndex - startIndex | 0;
  // Inline function 'kotlin.comparisons.minOf' call
  var b = s.j();
  var toCopy = Math.min(tmp0, b);
  s.yo(sink, startIndex, startIndex + toCopy | 0);
  this.ho_1 = this.ho_1.h3(toLong(toCopy));
  if (isEmpty(s)) {
    this.wo();
  }
  return toCopy;
};
protoOf(Buffer).zo = function (sink, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  if (!(byteCount.a1(new Long(0, 0)) >= 0)) {
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.j().equals(new Long(0, 0)))
    return new Long(-1, -1);
  var bytesWritten = byteCount.a1(this.j()) > 0 ? this.j() : byteCount;
  sink.ap(this, bytesWritten);
  return bytesWritten;
};
protoOf(Buffer).bp = function (minimumCapacity) {
  // Inline function 'kotlin.require' call
  if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
    var message = 'unexpected capacity (' + minimumCapacity + '), should be in range [1, 8192]';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.go_1 == null) {
    var result = SegmentPool_instance.ep();
    this.fo_1 = result;
    this.go_1 = result;
    return result;
  }
  var t = ensureNotNull(this.go_1);
  if ((t.qo_1 + minimumCapacity | 0) > 8192 || !t.so_1) {
    var newTail = t.fp(SegmentPool_instance.ep());
    this.go_1 = newTail;
    return newTail;
  }
  return t;
};
protoOf(Buffer).ap = function (source, byteCount) {
  // Inline function 'kotlin.require' call
  if (!!(source === this)) {
    var message = 'source == this';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  checkOffsetAndCount(source.ho_1, new Long(0, 0), byteCount);
  var remainingByteCount = byteCount;
  while (remainingByteCount.a1(new Long(0, 0)) > 0) {
    if (remainingByteCount.a1(toLong(ensureNotNull(source.fo_1).j())) < 0) {
      var tail = this.go_1;
      var tmp;
      if (!(tail == null) && tail.so_1) {
        var tmp0 = remainingByteCount;
        // Inline function 'kotlin.Long.plus' call
        var other = tail.qo_1;
        var tmp0_0 = tmp0.g3(toLong(other));
        // Inline function 'kotlin.Long.minus' call
        var other_0 = tail.gp() ? 0 : tail.po_1;
        tmp = tmp0_0.h3(toLong(other_0)).a1(new Long(8192, 0)) <= 0;
      } else {
        tmp = false;
      }
      if (tmp) {
        ensureNotNull(source.fo_1).ip(tail, remainingByteCount.c1());
        source.ho_1 = source.ho_1.h3(remainingByteCount);
        this.ho_1 = this.ho_1.g3(remainingByteCount);
        return Unit_instance;
      } else {
        source.fo_1 = ensureNotNull(source.fo_1).hp(remainingByteCount.c1());
      }
    }
    var segmentToMove = ensureNotNull(source.fo_1);
    var movedByteCount = toLong(segmentToMove.j());
    source.fo_1 = segmentToMove.jp();
    if (source.fo_1 == null) {
      source.go_1 = null;
    }
    // Inline function 'kotlinx.io.Buffer.pushSegment' call
    if (this.fo_1 == null) {
      this.fo_1 = segmentToMove;
      this.go_1 = segmentToMove;
    } else if (true) {
      this.go_1 = ensureNotNull(this.go_1).fp(segmentToMove).kp();
      if (ensureNotNull(this.go_1).uo_1 == null) {
        this.fo_1 = this.go_1;
      }
    } else {
      this.go_1 = ensureNotNull(this.go_1).fp(segmentToMove);
    }
    source.ho_1 = source.ho_1.h3(movedByteCount);
    this.ho_1 = this.ho_1.g3(movedByteCount);
    remainingByteCount = remainingByteCount.h3(movedByteCount);
  }
};
protoOf(Buffer).lp = function (byte) {
  this.bp(1).mp(byte);
  this.ho_1 = this.ho_1.g3(new Long(1, 0));
};
protoOf(Buffer).j5 = function () {
  return Unit_instance;
};
protoOf(Buffer).toString = function () {
  if (this.j().equals(new Long(0, 0)))
    return 'Buffer(size=0)';
  var maxPrintableBytes = 64;
  // Inline function 'kotlinx.io.minOf' call
  var b = this.j();
  // Inline function 'kotlin.comparisons.minOf' call
  var a = toLong(maxPrintableBytes);
  var len = (a.a1(b) <= 0 ? a : b).c1();
  var builder = StringBuilder_init_$Create$(imul(len, 2) + (this.j().a1(toLong(maxPrintableBytes)) > 0 ? 1 : 0) | 0);
  var bytesWritten = 0;
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = this.fo_1;
  while (!(curr == null)) {
    var tmp0 = get_SegmentReadContextImpl();
    var segment = curr;
    var idx = 0;
    while (bytesWritten < len && idx < segment.j()) {
      var _unary__edvuaz = idx;
      idx = _unary__edvuaz + 1 | 0;
      var b_0 = tmp0.np(segment, _unary__edvuaz);
      bytesWritten = bytesWritten + 1 | 0;
      var tmp = get_HEX_DIGIT_CHARS();
      // Inline function 'kotlinx.io.shr' call
      var tmp$ret$2 = b_0 >> 4;
      var tmp_0 = builder.k9(tmp[tmp$ret$2 & 15]);
      var tmp_1 = get_HEX_DIGIT_CHARS();
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$3 = b_0 & 15;
      tmp_0.k9(tmp_1[tmp$ret$3]);
    }
    curr = curr.to_1;
  }
  if (this.j().a1(toLong(maxPrintableBytes)) > 0) {
    builder.k9(_Char___init__impl__6a9atx(8230));
  }
  return 'Buffer(size=' + this.j().toString() + ' hex=' + builder.toString() + ')';
};
protoOf(Buffer).wo = function () {
  var oldHead = ensureNotNull(this.fo_1);
  var nextHead = oldHead.to_1;
  this.fo_1 = nextHead;
  if (nextHead == null) {
    this.go_1 = null;
  } else {
    nextHead.uo_1 = null;
  }
  oldHead.to_1 = null;
  SegmentPool_instance.op(oldHead);
};
protoOf(Buffer).pp = function () {
  var oldTail = ensureNotNull(this.go_1);
  var newTail = oldTail.uo_1;
  this.go_1 = newTail;
  if (newTail == null) {
    this.fo_1 = null;
  } else {
    newTail.to_1 = null;
  }
  oldTail.uo_1 = null;
  SegmentPool_instance.op(oldTail);
};
function buffered(_this__u8e3s4) {
  return new RealSource(_this__u8e3s4);
}
function buffered_0(_this__u8e3s4) {
  return new RealSink(_this__u8e3s4);
}
function RealSink(sink) {
  this.qp_1 = sink;
  this.rp_1 = false;
  this.sp_1 = new Buffer();
}
protoOf(RealSink).io = function () {
  return this.sp_1;
};
protoOf(RealSink).ap = function (source, byteCount) {
  // Inline function 'kotlinx.io.RealSink.checkNotClosed' call
  // Inline function 'kotlin.check' call
  if (!!this.rp_1) {
    var message = 'Sink is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(byteCount.a1(new Long(0, 0)) >= 0)) {
    var message_0 = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  this.sp_1.ap(source, byteCount);
  this.mo();
};
protoOf(RealSink).mo = function () {
  // Inline function 'kotlinx.io.RealSink.checkNotClosed' call
  // Inline function 'kotlin.check' call
  if (!!this.rp_1) {
    var message = 'Sink is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var byteCount = this.sp_1.no();
  if (byteCount.a1(new Long(0, 0)) > 0) {
    this.qp_1.ap(this.sp_1, byteCount);
  }
};
protoOf(RealSink).j5 = function () {
  if (this.rp_1)
    return Unit_instance;
  var thrown = null;
  try {
    if (this.sp_1.j().a1(new Long(0, 0)) > 0) {
      this.qp_1.ap(this.sp_1, this.sp_1.j());
    }
  } catch ($p) {
    if ($p instanceof Error) {
      var e = $p;
      thrown = e;
    } else {
      throw $p;
    }
  }
  try {
    this.qp_1.j5();
  } catch ($p) {
    if ($p instanceof Error) {
      var e_0 = $p;
      if (thrown == null)
        thrown = e_0;
    } else {
      throw $p;
    }
  }
  this.rp_1 = true;
  if (!(thrown == null))
    throw thrown;
};
protoOf(RealSink).toString = function () {
  return 'buffered(' + toString(this.qp_1) + ')';
};
function RealSource(source) {
  this.tp_1 = source;
  this.up_1 = false;
  this.vp_1 = new Buffer();
}
protoOf(RealSource).io = function () {
  return this.vp_1;
};
protoOf(RealSource).zo = function (sink, byteCount) {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  if (!!this.up_1) {
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(byteCount.a1(new Long(0, 0)) >= 0)) {
    var message_0 = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  if (this.vp_1.j().equals(new Long(0, 0))) {
    var read = this.tp_1.zo(this.vp_1, new Long(8192, 0));
    if (read.equals(new Long(-1, -1)))
      return new Long(-1, -1);
  }
  // Inline function 'kotlin.comparisons.minOf' call
  var b = this.vp_1.j();
  var toRead = byteCount.a1(b) <= 0 ? byteCount : b;
  return this.vp_1.zo(sink, toRead);
};
protoOf(RealSource).ko = function (byteCount) {
  if (!this.lo(byteCount))
    throw EOFException_init_$Create$_0("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
};
protoOf(RealSource).lo = function (byteCount) {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  if (!!this.up_1) {
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(byteCount.a1(new Long(0, 0)) >= 0)) {
    var message_0 = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  while (this.vp_1.j().a1(byteCount) < 0) {
    if (this.tp_1.zo(this.vp_1, new Long(8192, 0)).equals(new Long(-1, -1)))
      return false;
  }
  return true;
};
protoOf(RealSource).xo = function (sink, startIndex, endIndex) {
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  if (this.vp_1.j().equals(new Long(0, 0))) {
    var read = this.tp_1.zo(this.vp_1, new Long(8192, 0));
    if (read.equals(new Long(-1, -1)))
      return -1;
  }
  var tmp0 = endIndex - startIndex | 0;
  // Inline function 'kotlinx.io.minOf' call
  var b = this.vp_1.j();
  // Inline function 'kotlin.comparisons.minOf' call
  var a = toLong(tmp0);
  var toRead = (a.a1(b) <= 0 ? a : b).c1();
  return this.vp_1.xo(sink, startIndex, startIndex + toRead | 0);
};
protoOf(RealSource).j5 = function () {
  if (this.up_1)
    return Unit_instance;
  this.up_1 = true;
  this.tp_1.j5();
  this.vp_1.i2();
};
protoOf(RealSource).toString = function () {
  return 'buffered(' + toString(this.tp_1) + ')';
};
function Segment_init_$Init$($this) {
  Segment.call($this);
  $this.oo_1 = new Int8Array(8192);
  $this.so_1 = true;
  $this.ro_1 = null;
  return $this;
}
function Segment_init_$Create$() {
  return Segment_init_$Init$(objectCreate(protoOf(Segment)));
}
function Segment_init_$Init$_0(data, pos, limit, shareToken, owner, $this) {
  Segment.call($this);
  $this.oo_1 = data;
  $this.po_1 = pos;
  $this.qo_1 = limit;
  $this.ro_1 = shareToken;
  $this.so_1 = owner;
  return $this;
}
function Segment_init_$Create$_0(data, pos, limit, shareToken, owner) {
  return Segment_init_$Init$_0(data, pos, limit, shareToken, owner, objectCreate(protoOf(Segment)));
}
function Companion() {
  this.wp_1 = 8192;
  this.xp_1 = 1024;
}
protoOf(Companion).yp = function () {
  return Segment_init_$Create$();
};
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
protoOf(Segment).gp = function () {
  var tmp0_safe_receiver = this.ro_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zp();
  return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
};
protoOf(Segment).aq = function () {
  var tmp0_elvis_lhs = this.ro_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.also' call
    var this_0 = SegmentPool_instance.bq();
    this.ro_1 = this_0;
    tmp = this_0;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var t = tmp;
  var tmp_0 = this.po_1;
  var tmp_1 = this.qo_1;
  // Inline function 'kotlin.also' call
  t.cq();
  return Segment_init_$Create$_0(this.oo_1, tmp_0, tmp_1, t, false);
};
protoOf(Segment).jp = function () {
  var result = this.to_1;
  if (!(this.uo_1 == null)) {
    ensureNotNull(this.uo_1).to_1 = this.to_1;
  }
  if (!(this.to_1 == null)) {
    ensureNotNull(this.to_1).uo_1 = this.uo_1;
  }
  this.to_1 = null;
  this.uo_1 = null;
  return result;
};
protoOf(Segment).fp = function (segment) {
  segment.uo_1 = this;
  segment.to_1 = this.to_1;
  if (!(this.to_1 == null)) {
    ensureNotNull(this.to_1).uo_1 = segment;
  }
  this.to_1 = segment;
  return segment;
};
protoOf(Segment).hp = function (byteCount) {
  // Inline function 'kotlin.require' call
  if (!(byteCount > 0 && byteCount <= (this.qo_1 - this.po_1 | 0))) {
    var message = 'byteCount out of range';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var prefix;
  if (byteCount >= 1024) {
    prefix = this.aq();
  } else {
    prefix = SegmentPool_instance.ep();
    var tmp0 = this.oo_1;
    var tmp2 = prefix.oo_1;
    var tmp4 = this.po_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.po_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, 0, tmp4, endIndex);
  }
  prefix.qo_1 = prefix.po_1 + byteCount | 0;
  this.po_1 = this.po_1 + byteCount | 0;
  if (!(this.uo_1 == null)) {
    ensureNotNull(this.uo_1).fp(prefix);
  } else {
    prefix.to_1 = this;
    this.uo_1 = prefix;
  }
  return prefix;
};
protoOf(Segment).kp = function () {
  // Inline function 'kotlin.check' call
  if (!!(this.uo_1 == null)) {
    var message = 'cannot compact';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if (!ensureNotNull(this.uo_1).so_1)
    return this;
  var byteCount = this.qo_1 - this.po_1 | 0;
  var availableByteCount = (8192 - ensureNotNull(this.uo_1).qo_1 | 0) + (ensureNotNull(this.uo_1).gp() ? 0 : ensureNotNull(this.uo_1).po_1) | 0;
  if (byteCount > availableByteCount)
    return this;
  var predecessor = this.uo_1;
  this.ip(ensureNotNull(predecessor), byteCount);
  var successor = this.jp();
  // Inline function 'kotlin.check' call
  if (!(successor == null)) {
    throw IllegalStateException_init_$Create$('Check failed.');
  }
  SegmentPool_instance.op(this);
  return predecessor;
};
protoOf(Segment).mp = function (byte) {
  var _unary__edvuaz = this.qo_1;
  this.qo_1 = _unary__edvuaz + 1 | 0;
  this.oo_1[_unary__edvuaz] = byte;
};
protoOf(Segment).ip = function (sink, byteCount) {
  // Inline function 'kotlin.check' call
  if (!sink.so_1) {
    var message = 'only owner can write';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if ((sink.qo_1 + byteCount | 0) > 8192) {
    if (sink.gp())
      throw IllegalArgumentException_init_$Create$_0();
    if (((sink.qo_1 + byteCount | 0) - sink.po_1 | 0) > 8192)
      throw IllegalArgumentException_init_$Create$_0();
    var tmp0 = sink.oo_1;
    var tmp2 = sink.oo_1;
    var tmp4 = sink.po_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = sink.qo_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, 0, tmp4, endIndex);
    sink.qo_1 = sink.qo_1 - sink.po_1 | 0;
    sink.po_1 = 0;
  }
  var tmp0_0 = this.oo_1;
  var tmp2_0 = sink.oo_1;
  var tmp4_0 = sink.qo_1;
  var tmp6 = this.po_1;
  // Inline function 'kotlin.collections.copyInto' call
  var endIndex_0 = this.po_1 + byteCount | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_0 = tmp0_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_0, tmp2_0, tmp4_0, tmp6, endIndex_0);
  sink.qo_1 = sink.qo_1 + byteCount | 0;
  this.po_1 = this.po_1 + byteCount | 0;
};
protoOf(Segment).yo = function (dst, dstStartOffset, dstEndOffset) {
  var len = dstEndOffset - dstStartOffset | 0;
  var tmp0 = this.oo_1;
  var tmp6 = this.po_1;
  // Inline function 'kotlin.collections.copyInto' call
  var endIndex = this.po_1 + len | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = tmp0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, dst, dstStartOffset, tmp6, endIndex);
  this.po_1 = this.po_1 + len | 0;
};
protoOf(Segment).j = function () {
  return this.qo_1 - this.po_1 | 0;
};
protoOf(Segment).dq = function () {
  return this.oo_1.length - this.qo_1 | 0;
};
protoOf(Segment).eq = function (readOnly) {
  return this.oo_1;
};
protoOf(Segment).fq = function (index) {
  return this.oo_1[this.po_1 + index | 0];
};
protoOf(Segment).gq = function (index, value) {
  this.oo_1[this.qo_1 + index | 0] = value;
};
protoOf(Segment).hq = function (index, b0, b1) {
  var d = this.oo_1;
  var l = this.qo_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
};
protoOf(Segment).iq = function (index, b0, b1, b2) {
  var d = this.oo_1;
  var l = this.qo_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
  d[(l + index | 0) + 2 | 0] = b2;
};
protoOf(Segment).jq = function (index, b0, b1, b2, b3) {
  var d = this.oo_1;
  var l = this.qo_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
  d[(l + index | 0) + 2 | 0] = b2;
  d[(l + index | 0) + 3 | 0] = b3;
};
function Segment() {
  this.po_1 = 0;
  this.qo_1 = 0;
  this.ro_1 = null;
  this.so_1 = false;
  this.to_1 = null;
  this.uo_1 = null;
}
function SegmentCopyTracker() {
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.j() === 0;
}
function AlwaysSharedCopyTracker() {
  AlwaysSharedCopyTracker_instance = this;
  SegmentCopyTracker.call(this);
}
protoOf(AlwaysSharedCopyTracker).zp = function () {
  return true;
};
protoOf(AlwaysSharedCopyTracker).cq = function () {
  return Unit_instance;
};
var AlwaysSharedCopyTracker_instance;
function AlwaysSharedCopyTracker_getInstance() {
  if (AlwaysSharedCopyTracker_instance == null)
    new AlwaysSharedCopyTracker();
  return AlwaysSharedCopyTracker_instance;
}
function readByteArray(_this__u8e3s4, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  var byteCount_0 = toLong(byteCount);
  // Inline function 'kotlin.require' call
  if (!(byteCount_0.a1(new Long(0, 0)) >= 0)) {
    var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return readByteArrayImpl(_this__u8e3s4, byteCount);
}
function readByteArrayImpl(_this__u8e3s4, size) {
  var arraySize = size;
  if (size === -1) {
    var fetchSize = new Long(2147483647, 0);
    while (_this__u8e3s4.io().j().a1(new Long(2147483647, 0)) < 0 && _this__u8e3s4.lo(fetchSize)) {
      // Inline function 'kotlin.Long.times' call
      fetchSize = fetchSize.i3(toLong(2));
    }
    // Inline function 'kotlin.check' call
    if (!(_this__u8e3s4.io().j().a1(new Long(2147483647, 0)) < 0)) {
      var message = "Can't create an array of size " + _this__u8e3s4.io().j().toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    arraySize = _this__u8e3s4.io().j().c1();
  } else {
    _this__u8e3s4.ko(toLong(size));
  }
  var array = new Int8Array(arraySize);
  readTo(_this__u8e3s4.io(), array);
  return array;
}
function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? sink.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  var offset = startIndex;
  while (offset < endIndex) {
    var bytesRead = _this__u8e3s4.xo(sink, offset, endIndex);
    if (bytesRead === -1) {
      throw EOFException_init_$Create$_0('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
    }
    offset = offset + bytesRead | 0;
  }
}
function readString(_this__u8e3s4) {
  _this__u8e3s4.lo(new Long(-1, 2147483647));
  return commonReadUtf8(_this__u8e3s4.io(), _this__u8e3s4.io().j());
}
function writeString(_this__u8e3s4, string, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? string.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = string.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  // Inline function 'kotlinx.io.writeToInternalBuffer' call
  // Inline function 'kotlinx.io.commonWriteUtf8' call
  var this_0 = _this__u8e3s4.io();
  var i = startIndex;
  while (i < endIndex) {
    var p0 = i;
    // Inline function 'kotlin.code' call
    var this_1 = charCodeAt(string, p0);
    var c = Char__toInt_impl_vasixd(this_1);
    if (c < 128) {
      $l$block_0: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail = this_0.bp(1);
        var ctx = get_SegmentWriteContextImpl();
        var segmentOffset = -i | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = i + tail.dq() | 0;
        var runLimit = Math.min(endIndex, b);
        var _unary__edvuaz = i;
        i = _unary__edvuaz + 1 | 0;
        ctx.nq(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
        $l$loop: while (i < runLimit) {
          var p0_0 = i;
          // Inline function 'kotlin.code' call
          var this_2 = charCodeAt(string, p0_0);
          c = Char__toInt_impl_vasixd(this_2);
          if (c >= 128)
            break $l$loop;
          var _unary__edvuaz_0 = i;
          i = _unary__edvuaz_0 + 1 | 0;
          ctx.nq(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
        }
        var bytesWritten = i + segmentOffset | 0;
        if (bytesWritten === 1) {
          tail.qo_1 = tail.qo_1 + bytesWritten | 0;
          var tmp = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp.ho_1 = this_0.ho_1.g3(toLong(bytesWritten));
          break $l$block_0;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten ? bytesWritten <= tail.dq() : false)) {
          var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.dq();
          throw IllegalStateException_init_$Create$(toString(message));
        }
        if (!(bytesWritten === 0)) {
          tail.qo_1 = tail.qo_1 + bytesWritten | 0;
          var tmp_0 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_0.ho_1 = this_0.ho_1.g3(toLong(bytesWritten));
          break $l$block_0;
        }
        if (isEmpty(tail)) {
          this_0.pp();
        }
      }
    } else if (c < 2048) {
      $l$block_2: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_0 = this_0.bp(2);
        get_SegmentWriteContextImpl().mq(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
        var bytesWritten_0 = 2;
        if (bytesWritten_0 === 2) {
          tail_0.qo_1 = tail_0.qo_1 + bytesWritten_0 | 0;
          var tmp_1 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_1.ho_1 = this_0.ho_1.g3(toLong(bytesWritten_0));
          break $l$block_2;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.dq() : false)) {
          var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.dq();
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
        if (!(bytesWritten_0 === 0)) {
          tail_0.qo_1 = tail_0.qo_1 + bytesWritten_0 | 0;
          var tmp_2 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_2.ho_1 = this_0.ho_1.g3(toLong(bytesWritten_0));
          break $l$block_2;
        }
        if (isEmpty(tail_0)) {
          this_0.pp();
        }
      }
      i = i + 1 | 0;
    } else if (c < 55296 || c > 57343) {
      $l$block_4: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_1 = this_0.bp(3);
        get_SegmentWriteContextImpl().lq(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
        var bytesWritten_1 = 3;
        if (bytesWritten_1 === 3) {
          tail_1.qo_1 = tail_1.qo_1 + bytesWritten_1 | 0;
          var tmp_3 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_3.ho_1 = this_0.ho_1.g3(toLong(bytesWritten_1));
          break $l$block_4;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.dq() : false)) {
          var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.dq();
          throw IllegalStateException_init_$Create$(toString(message_1));
        }
        if (!(bytesWritten_1 === 0)) {
          tail_1.qo_1 = tail_1.qo_1 + bytesWritten_1 | 0;
          var tmp_4 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_4.ho_1 = this_0.ho_1.g3(toLong(bytesWritten_1));
          break $l$block_4;
        }
        if (isEmpty(tail_1)) {
          this_0.pp();
        }
      }
      i = i + 1 | 0;
    } else {
      var tmp_5;
      if ((i + 1 | 0) < endIndex) {
        var p0_1 = i + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_3 = charCodeAt(string, p0_1);
        tmp_5 = Char__toInt_impl_vasixd(this_3);
      } else {
        tmp_5 = 0;
      }
      var low = tmp_5;
      if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
        // Inline function 'kotlin.code' call
        var this_4 = _Char___init__impl__6a9atx(63);
        var tmp$ret$26 = Char__toInt_impl_vasixd(this_4);
        this_0.lp(toByte(tmp$ret$26));
        i = i + 1 | 0;
      } else {
        var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
        $l$block_6: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_2 = this_0.bp(4);
          get_SegmentWriteContextImpl().kq(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
          var bytesWritten_2 = 4;
          if (bytesWritten_2 === 4) {
            tail_2.qo_1 = tail_2.qo_1 + bytesWritten_2 | 0;
            var tmp_6 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_6.ho_1 = this_0.ho_1.g3(toLong(bytesWritten_2));
            break $l$block_6;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.dq() : false)) {
            var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.dq();
            throw IllegalStateException_init_$Create$(toString(message_2));
          }
          if (!(bytesWritten_2 === 0)) {
            tail_2.qo_1 = tail_2.qo_1 + bytesWritten_2 | 0;
            var tmp_7 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_7.ho_1 = this_0.ho_1.g3(toLong(bytesWritten_2));
            break $l$block_6;
          }
          if (isEmpty(tail_2)) {
            this_0.pp();
          }
        }
        i = i + 2 | 0;
      }
    }
  }
  _this__u8e3s4.mo();
}
function commonReadUtf8(_this__u8e3s4, byteCount) {
  if (byteCount.equals(new Long(0, 0)))
    return '';
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = _this__u8e3s4.fo_1;
  while (!(curr == null)) {
    get_SegmentReadContextImpl();
    if (toLong(curr.j()).a1(byteCount) >= 0) {
      var result = '';
      // Inline function 'kotlinx.io.unsafe.withData' call
      var tmp0 = curr.eq(true);
      var tmp2 = curr.po_1;
      var tmp0_0 = curr.qo_1;
      // Inline function 'kotlin.math.min' call
      var b = tmp2 + byteCount.c1() | 0;
      var tmp$ret$0 = Math.min(tmp0_0, b);
      result = commonToUtf8String(tmp0, tmp2, tmp$ret$0);
      _this__u8e3s4.vo(byteCount);
      return result;
    }
    return commonToUtf8String(readByteArray(_this__u8e3s4, byteCount.c1()));
  }
  // Inline function 'kotlin.error' call
  var message = 'Unreacheable';
  throw IllegalStateException_init_$Create$(toString(message));
}
function writeCodePointValue(_this__u8e3s4, codePoint) {
  // Inline function 'kotlinx.io.writeToInternalBuffer' call
  var it = _this__u8e3s4.io();
  commonWriteUtf8CodePoint(it, codePoint);
  _this__u8e3s4.mo();
  return Unit_instance;
}
function commonWriteUtf8CodePoint(_this__u8e3s4, codePoint) {
  if (codePoint < 0 || codePoint > 1114111) {
    throw IllegalArgumentException_init_$Create$('Code point value is out of Unicode codespace 0..0x10ffff: 0x' + toHexString(codePoint) + ' (' + codePoint + ')');
  } else if (codePoint < 128) {
    _this__u8e3s4.lp(toByte(codePoint));
  } else if (codePoint < 2048) {
    $l$block_0: {
      // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
      var tail = _this__u8e3s4.bp(2);
      var ctx = get_SegmentWriteContextImpl();
      ctx.nq(tail, 0, toByte(codePoint >> 6 | 192));
      ctx.nq(tail, 1, toByte(codePoint & 63 | 128));
      var bytesWritten = 2;
      if (bytesWritten === 2) {
        tail.qo_1 = tail.qo_1 + bytesWritten | 0;
        var tmp = _this__u8e3s4;
        // Inline function 'kotlin.Long.plus' call
        tmp.ho_1 = _this__u8e3s4.ho_1.g3(toLong(bytesWritten));
        break $l$block_0;
      }
      // Inline function 'kotlin.check' call
      if (!(0 <= bytesWritten ? bytesWritten <= tail.dq() : false)) {
        var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.dq();
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (!(bytesWritten === 0)) {
        tail.qo_1 = tail.qo_1 + bytesWritten | 0;
        var tmp_0 = _this__u8e3s4;
        // Inline function 'kotlin.Long.plus' call
        tmp_0.ho_1 = _this__u8e3s4.ho_1.g3(toLong(bytesWritten));
        break $l$block_0;
      }
      if (isEmpty(tail)) {
        _this__u8e3s4.pp();
      }
    }
  } else if (55296 <= codePoint ? codePoint <= 57343 : false) {
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(63);
    var tmp$ret$6 = Char__toInt_impl_vasixd(this_0);
    _this__u8e3s4.lp(toByte(tmp$ret$6));
  } else if (codePoint < 65536) {
    $l$block_2: {
      // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
      var tail_0 = _this__u8e3s4.bp(3);
      var ctx_0 = get_SegmentWriteContextImpl();
      ctx_0.nq(tail_0, 0, toByte(codePoint >> 12 | 224));
      ctx_0.nq(tail_0, 1, toByte(codePoint >> 6 & 63 | 128));
      ctx_0.nq(tail_0, 2, toByte(codePoint & 63 | 128));
      var bytesWritten_0 = 3;
      if (bytesWritten_0 === 3) {
        tail_0.qo_1 = tail_0.qo_1 + bytesWritten_0 | 0;
        var tmp_1 = _this__u8e3s4;
        // Inline function 'kotlin.Long.plus' call
        tmp_1.ho_1 = _this__u8e3s4.ho_1.g3(toLong(bytesWritten_0));
        break $l$block_2;
      }
      // Inline function 'kotlin.check' call
      if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.dq() : false)) {
        var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.dq();
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (!(bytesWritten_0 === 0)) {
        tail_0.qo_1 = tail_0.qo_1 + bytesWritten_0 | 0;
        var tmp_2 = _this__u8e3s4;
        // Inline function 'kotlin.Long.plus' call
        tmp_2.ho_1 = _this__u8e3s4.ho_1.g3(toLong(bytesWritten_0));
        break $l$block_2;
      }
      if (isEmpty(tail_0)) {
        _this__u8e3s4.pp();
      }
    }
  } else {
    $l$block_4: {
      // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
      var tail_1 = _this__u8e3s4.bp(4);
      var ctx_1 = get_SegmentWriteContextImpl();
      ctx_1.nq(tail_1, 0, toByte(codePoint >> 18 | 240));
      ctx_1.nq(tail_1, 1, toByte(codePoint >> 12 & 63 | 128));
      ctx_1.nq(tail_1, 2, toByte(codePoint >> 6 & 63 | 128));
      ctx_1.nq(tail_1, 3, toByte(codePoint & 63 | 128));
      var bytesWritten_1 = 4;
      if (bytesWritten_1 === 4) {
        tail_1.qo_1 = tail_1.qo_1 + bytesWritten_1 | 0;
        var tmp_3 = _this__u8e3s4;
        // Inline function 'kotlin.Long.plus' call
        tmp_3.ho_1 = _this__u8e3s4.ho_1.g3(toLong(bytesWritten_1));
        break $l$block_4;
      }
      // Inline function 'kotlin.check' call
      if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.dq() : false)) {
        var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.dq();
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      if (!(bytesWritten_1 === 0)) {
        tail_1.qo_1 = tail_1.qo_1 + bytesWritten_1 | 0;
        var tmp_4 = _this__u8e3s4;
        // Inline function 'kotlin.Long.plus' call
        tmp_4.ho_1 = _this__u8e3s4.ho_1.g3(toLong(bytesWritten_1));
        break $l$block_4;
      }
      if (isEmpty(tail_1)) {
        _this__u8e3s4.pp();
      }
    }
  }
}
function FileSystem() {
}
function SystemFileSystemImpl() {
}
function FileMetadata(isRegularFile, isDirectory, size) {
  isRegularFile = isRegularFile === VOID ? false : isRegularFile;
  isDirectory = isDirectory === VOID ? false : isDirectory;
  size = size === VOID ? new Long(0, 0) : size;
  this.vq_1 = isRegularFile;
  this.wq_1 = isDirectory;
  this.xq_1 = size;
}
function Path(base, parts) {
  return Path_0(base.toString(), parts.slice());
}
function removeTrailingSeparators(path, isWindows_) {
  isWindows_ = isWindows_ === VOID ? get_isWindows() : isWindows_;
  if (isWindows_) {
    var tmp;
    if (path.length > 1) {
      var tmp_0;
      if (charCodeAt(path, 1) === _Char___init__impl__6a9atx(58)) {
        tmp_0 = 3;
      } else if (isUnc(path)) {
        tmp_0 = 2;
      } else {
        tmp_0 = 1;
      }
      tmp = tmp_0;
    } else {
      tmp = 1;
    }
    var limit = tmp;
    return removeTrailingSeparatorsWindows(limit, path);
  }
  return removeTrailingSeparatorsUnix(path);
}
function Path_0(base, parts) {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$_0();
  this_0.j9(base);
  // Inline function 'kotlin.collections.forEach' call
  var inductionVariable = 0;
  var last = parts.length;
  while (inductionVariable < last) {
    var element = parts[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = !endsWith(this_0, get_SystemPathSeparator());
    } else {
      tmp = false;
    }
    if (tmp) {
      this_0.k9(get_SystemPathSeparator());
    }
    this_0.j9(element);
  }
  var tmp$ret$5 = this_0.toString();
  return Path_2(tmp$ret$5);
}
function isUnc(path) {
  if (path.length < 2)
    return false;
  if (startsWith(path, '\\\\'))
    return true;
  if (startsWith(path, '//'))
    return true;
  return false;
}
function removeTrailingSeparatorsWindows(suffixLength, path) {
  // Inline function 'kotlin.require' call
  // Inline function 'kotlin.require' call
  if (!(suffixLength >= 1)) {
    var message = 'Failed requirement.';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var idx = path.length;
  $l$loop: while (idx > suffixLength) {
    var c = charCodeAt(path, idx - 1 | 0);
    if (!(c === _Char___init__impl__6a9atx(92)) && !(c === _Char___init__impl__6a9atx(47)))
      break $l$loop;
    idx = idx - 1 | 0;
  }
  return substring(path, 0, idx);
}
function removeTrailingSeparatorsUnix(path) {
  var idx = path.length;
  while (idx > 1 && charCodeAt(path, idx - 1 | 0) === _Char___init__impl__6a9atx(47)) {
    idx = idx - 1 | 0;
  }
  return substring(path, 0, idx);
}
function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
  beginIndex = beginIndex === VOID ? 0 : beginIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
  if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
    throw IndexOutOfBoundsException_init_$Create$('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
  }
  var chars = charArray(endIndex - beginIndex | 0);
  var length = 0;
  // Inline function 'kotlinx.io.internal.processUtf16Chars' call
  var index = beginIndex;
  while (index < endIndex) {
    var b0 = _this__u8e3s4[index];
    if (b0 >= 0) {
      var c = numberToChar(b0);
      var _unary__edvuaz = length;
      length = _unary__edvuaz + 1 | 0;
      chars[_unary__edvuaz] = c;
      index = index + 1 | 0;
      while (index < endIndex && _this__u8e3s4[index] >= 0) {
        var _unary__edvuaz_0 = index;
        index = _unary__edvuaz_0 + 1 | 0;
        var c_0 = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
        var _unary__edvuaz_1 = length;
        length = _unary__edvuaz_1 + 1 | 0;
        chars[_unary__edvuaz_1] = c_0;
      }
    } else {
      // Inline function 'kotlinx.io.shr' call
      if (b0 >> 5 === -2) {
        var tmp = index;
        var tmp2 = index;
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
          if (endIndex <= (tmp2 + 1 | 0)) {
            var c_1 = numberToChar(65533);
            var _unary__edvuaz_2 = length;
            length = _unary__edvuaz_2 + 1 | 0;
            chars[_unary__edvuaz_2] = c_1;
            tmp$ret$5 = 1;
            break $l$block_0;
          }
          var b0_0 = _this__u8e3s4[tmp2];
          var b1 = _this__u8e3s4[tmp2 + 1 | 0];
          // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
          // Inline function 'kotlinx.io.and' call
          if (!((b1 & 192) === 128)) {
            var c_2 = numberToChar(65533);
            var _unary__edvuaz_3 = length;
            length = _unary__edvuaz_3 + 1 | 0;
            chars[_unary__edvuaz_3] = c_2;
            tmp$ret$5 = 1;
            break $l$block_0;
          }
          var codePoint = 3968 ^ b1 ^ b0_0 << 6;
          if (codePoint < 128) {
            var c_3 = numberToChar(65533);
            var _unary__edvuaz_4 = length;
            length = _unary__edvuaz_4 + 1 | 0;
            chars[_unary__edvuaz_4] = c_3;
          } else {
            var c_4 = numberToChar(codePoint);
            var _unary__edvuaz_5 = length;
            length = _unary__edvuaz_5 + 1 | 0;
            chars[_unary__edvuaz_5] = c_4;
          }
          tmp$ret$5 = 2;
        }
        index = tmp + tmp$ret$5 | 0;
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 4 === -2) {
          var tmp_0 = index;
          var tmp2_0 = index;
          var tmp$ret$19;
          $l$block_4: {
            // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
            if (endIndex <= (tmp2_0 + 2 | 0)) {
              var c_5 = numberToChar(65533);
              var _unary__edvuaz_6 = length;
              length = _unary__edvuaz_6 + 1 | 0;
              chars[_unary__edvuaz_6] = c_5;
              var tmp_1;
              if (endIndex <= (tmp2_0 + 1 | 0)) {
                tmp_1 = true;
              } else {
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                tmp_1 = !((_this__u8e3s4[tmp2_0 + 1 | 0] & 192) === 128);
              }
              if (tmp_1) {
                tmp$ret$19 = 1;
                break $l$block_4;
              } else {
                tmp$ret$19 = 2;
                break $l$block_4;
              }
            }
            var b0_1 = _this__u8e3s4[tmp2_0];
            var b1_0 = _this__u8e3s4[tmp2_0 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1_0 & 192) === 128)) {
              var c_6 = numberToChar(65533);
              var _unary__edvuaz_7 = length;
              length = _unary__edvuaz_7 + 1 | 0;
              chars[_unary__edvuaz_7] = c_6;
              tmp$ret$19 = 1;
              break $l$block_4;
            }
            var b2 = _this__u8e3s4[tmp2_0 + 2 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b2 & 192) === 128)) {
              var c_7 = numberToChar(65533);
              var _unary__edvuaz_8 = length;
              length = _unary__edvuaz_8 + 1 | 0;
              chars[_unary__edvuaz_8] = c_7;
              tmp$ret$19 = 2;
              break $l$block_4;
            }
            var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
            if (codePoint_0 < 2048) {
              var c_8 = numberToChar(65533);
              var _unary__edvuaz_9 = length;
              length = _unary__edvuaz_9 + 1 | 0;
              chars[_unary__edvuaz_9] = c_8;
            } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
              var c_9 = numberToChar(65533);
              var _unary__edvuaz_10 = length;
              length = _unary__edvuaz_10 + 1 | 0;
              chars[_unary__edvuaz_10] = c_9;
            } else {
              var c_10 = numberToChar(codePoint_0);
              var _unary__edvuaz_11 = length;
              length = _unary__edvuaz_11 + 1 | 0;
              chars[_unary__edvuaz_11] = c_10;
            }
            tmp$ret$19 = 3;
          }
          index = tmp_0 + tmp$ret$19 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 3 === -2) {
            var tmp_2 = index;
            var tmp2_1 = index;
            var tmp$ret$41;
            $l$block_10: {
              // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
              if (endIndex <= (tmp2_1 + 3 | 0)) {
                if (!(65533 === 65533)) {
                  var c_11 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_12 = length;
                  length = _unary__edvuaz_12 + 1 | 0;
                  chars[_unary__edvuaz_12] = c_11;
                  var c_12 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_13 = length;
                  length = _unary__edvuaz_13 + 1 | 0;
                  chars[_unary__edvuaz_13] = c_12;
                } else {
                  var c_13 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_14 = length;
                  length = _unary__edvuaz_14 + 1 | 0;
                  chars[_unary__edvuaz_14] = c_13;
                }
                var tmp_3;
                if (endIndex <= (tmp2_1 + 1 | 0)) {
                  tmp_3 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_3 = !((_this__u8e3s4[tmp2_1 + 1 | 0] & 192) === 128);
                }
                if (tmp_3) {
                  tmp$ret$41 = 1;
                  break $l$block_10;
                } else {
                  var tmp_4;
                  if (endIndex <= (tmp2_1 + 2 | 0)) {
                    tmp_4 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_4 = !((_this__u8e3s4[tmp2_1 + 2 | 0] & 192) === 128);
                  }
                  if (tmp_4) {
                    tmp$ret$41 = 2;
                    break $l$block_10;
                  } else {
                    tmp$ret$41 = 3;
                    break $l$block_10;
                  }
                }
              }
              var b0_2 = _this__u8e3s4[tmp2_1];
              var b1_1 = _this__u8e3s4[tmp2_1 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_1 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_14 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_15 = length;
                  length = _unary__edvuaz_15 + 1 | 0;
                  chars[_unary__edvuaz_15] = c_14;
                  var c_15 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_16 = length;
                  length = _unary__edvuaz_16 + 1 | 0;
                  chars[_unary__edvuaz_16] = c_15;
                } else {
                  var c_16 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_17 = length;
                  length = _unary__edvuaz_17 + 1 | 0;
                  chars[_unary__edvuaz_17] = c_16;
                }
                tmp$ret$41 = 1;
                break $l$block_10;
              }
              var b2_0 = _this__u8e3s4[tmp2_1 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2_0 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_17 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_18 = length;
                  length = _unary__edvuaz_18 + 1 | 0;
                  chars[_unary__edvuaz_18] = c_17;
                  var c_18 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_19 = length;
                  length = _unary__edvuaz_19 + 1 | 0;
                  chars[_unary__edvuaz_19] = c_18;
                } else {
                  var c_19 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_20 = length;
                  length = _unary__edvuaz_20 + 1 | 0;
                  chars[_unary__edvuaz_20] = c_19;
                }
                tmp$ret$41 = 2;
                break $l$block_10;
              }
              var b3 = _this__u8e3s4[tmp2_1 + 3 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b3 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_20 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_21 = length;
                  length = _unary__edvuaz_21 + 1 | 0;
                  chars[_unary__edvuaz_21] = c_20;
                  var c_21 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_22 = length;
                  length = _unary__edvuaz_22 + 1 | 0;
                  chars[_unary__edvuaz_22] = c_21;
                } else {
                  var c_22 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_23 = length;
                  length = _unary__edvuaz_23 + 1 | 0;
                  chars[_unary__edvuaz_23] = c_22;
                }
                tmp$ret$41 = 3;
                break $l$block_10;
              }
              var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
              if (codePoint_1 > 1114111) {
                if (!(65533 === 65533)) {
                  var c_23 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_24 = length;
                  length = _unary__edvuaz_24 + 1 | 0;
                  chars[_unary__edvuaz_24] = c_23;
                  var c_24 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_25 = length;
                  length = _unary__edvuaz_25 + 1 | 0;
                  chars[_unary__edvuaz_25] = c_24;
                } else {
                  var c_25 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_26 = length;
                  length = _unary__edvuaz_26 + 1 | 0;
                  chars[_unary__edvuaz_26] = c_25;
                }
              } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                if (!(65533 === 65533)) {
                  var c_26 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_27 = length;
                  length = _unary__edvuaz_27 + 1 | 0;
                  chars[_unary__edvuaz_27] = c_26;
                  var c_27 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_28 = length;
                  length = _unary__edvuaz_28 + 1 | 0;
                  chars[_unary__edvuaz_28] = c_27;
                } else {
                  var c_28 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_29 = length;
                  length = _unary__edvuaz_29 + 1 | 0;
                  chars[_unary__edvuaz_29] = c_28;
                }
              } else if (codePoint_1 < 65536) {
                if (!(65533 === 65533)) {
                  var c_29 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_30 = length;
                  length = _unary__edvuaz_30 + 1 | 0;
                  chars[_unary__edvuaz_30] = c_29;
                  var c_30 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_31 = length;
                  length = _unary__edvuaz_31 + 1 | 0;
                  chars[_unary__edvuaz_31] = c_30;
                } else {
                  var c_31 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_32 = length;
                  length = _unary__edvuaz_32 + 1 | 0;
                  chars[_unary__edvuaz_32] = c_31;
                }
              } else {
                if (!(codePoint_1 === 65533)) {
                  var c_32 = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_33 = length;
                  length = _unary__edvuaz_33 + 1 | 0;
                  chars[_unary__edvuaz_33] = c_32;
                  var c_33 = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                  var _unary__edvuaz_34 = length;
                  length = _unary__edvuaz_34 + 1 | 0;
                  chars[_unary__edvuaz_34] = c_33;
                } else {
                  var c_34 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_35 = length;
                  length = _unary__edvuaz_35 + 1 | 0;
                  chars[_unary__edvuaz_35] = c_34;
                }
              }
              tmp$ret$41 = 4;
            }
            index = tmp_2 + tmp$ret$41 | 0;
          } else {
            var c_35 = _Char___init__impl__6a9atx(65533);
            var _unary__edvuaz_36 = length;
            length = _unary__edvuaz_36 + 1 | 0;
            chars[_unary__edvuaz_36] = c_35;
            index = index + 1 | 0;
          }
        }
      }
    }
  }
  return concatToString(chars, 0, length);
}
function get_SegmentReadContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentReadContextImpl;
}
var SegmentReadContextImpl;
function get_SegmentWriteContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentWriteContextImpl;
}
var SegmentWriteContextImpl;
var BufferIterationContextImpl;
function UnsafeBufferOperations() {
}
var UnsafeBufferOperations_instance;
function UnsafeBufferOperations_getInstance() {
  return UnsafeBufferOperations_instance;
}
function SegmentReadContextImpl$1() {
}
protoOf(SegmentReadContextImpl$1).np = function (segment, offset) {
  return segment.fq(offset);
};
function SegmentWriteContextImpl$1() {
}
protoOf(SegmentWriteContextImpl$1).nq = function (segment, offset, value) {
  segment.gq(offset, value);
};
protoOf(SegmentWriteContextImpl$1).mq = function (segment, offset, b0, b1) {
  segment.hq(offset, b0, b1);
};
protoOf(SegmentWriteContextImpl$1).lq = function (segment, offset, b0, b1, b2) {
  segment.iq(offset, b0, b1, b2);
};
protoOf(SegmentWriteContextImpl$1).kq = function (segment, offset, b0, b1, b2, b3) {
  segment.jq(offset, b0, b1, b2, b3);
};
function BufferIterationContextImpl$1() {
}
protoOf(BufferIterationContextImpl$1).np = function (segment, offset) {
  return get_SegmentReadContextImpl().np(segment, offset);
};
var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
  if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
    properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
    SegmentReadContextImpl = new SegmentReadContextImpl$1();
    SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
    BufferIterationContextImpl = new BufferIterationContextImpl$1();
  }
}
function withCaughtException(block) {
  try {
    block();
    return null;
  } catch ($p) {
    if ($p instanceof Error) {
      var t = $p;
      return t;
    } else {
      throw $p;
    }
  }
}
function IOException_init_$Init$($this) {
  Exception_init_$Init$($this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$() {
  var tmp = IOException_init_$Init$(objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$);
  return tmp;
}
function IOException_init_$Init$_0(message, $this) {
  Exception_init_$Init$_0(message, $this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$_0(message) {
  var tmp = IOException_init_$Init$_0(message, objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$_0);
  return tmp;
}
function IOException_init_$Init$_1(message, cause, $this) {
  Exception_init_$Init$_1(message, cause, $this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$_1(message, cause) {
  var tmp = IOException_init_$Init$_1(message, cause, objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$_1);
  return tmp;
}
function IOException() {
  captureStack(this, IOException);
}
function EOFException_init_$Init$($this) {
  IOException_init_$Init$($this);
  EOFException.call($this);
  return $this;
}
function EOFException_init_$Create$() {
  var tmp = EOFException_init_$Init$(objectCreate(protoOf(EOFException)));
  captureStack(tmp, EOFException_init_$Create$);
  return tmp;
}
function EOFException_init_$Init$_0(message, $this) {
  IOException_init_$Init$_0(message, $this);
  EOFException.call($this);
  return $this;
}
function EOFException_init_$Create$_0(message) {
  var tmp = EOFException_init_$Init$_0(message, objectCreate(protoOf(EOFException)));
  captureStack(tmp, EOFException_init_$Create$_0);
  return tmp;
}
function EOFException() {
  captureStack(this, EOFException);
}
function SegmentPool() {
  this.cp_1 = 0;
  this.dp_1 = 0;
}
protoOf(SegmentPool).ep = function () {
  return Companion_instance.yp();
};
protoOf(SegmentPool).op = function (segment) {
};
protoOf(SegmentPool).bq = function () {
  return AlwaysSharedCopyTracker_getInstance();
};
var SegmentPool_instance;
function SegmentPool_getInstance() {
  return SegmentPool_instance;
}
function get_path() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp0 = path$delegate;
  var tmp = KProperty0;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('path', 0, tmp, _get_path_$ref_hpvpv9(), null);
  return tmp0.n2();
}
var path$delegate;
function get_fs() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp0 = fs$delegate;
  var tmp = KProperty0;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('fs', 0, tmp, _get_fs_$ref_rnlob1(), null);
  return tmp0.n2();
}
var fs$delegate;
function get_os() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp0 = os$delegate;
  var tmp = KProperty0;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('os', 0, tmp, _get_os_$ref_hoy4d2(), null);
  return tmp0.n2();
}
var os$delegate;
function get_buffer() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp0 = buffer$delegate;
  var tmp = KProperty0;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('buffer', 0, tmp, _get_buffer_$ref_mc964a(), null);
  return tmp0.n2();
}
var buffer$delegate;
function path$delegate$lambda() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp;
  try {
    tmp = eval('require')('path');
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var e = $p;
      throw UnsupportedOperationException_init_$Create$("Module 'path' could not be imported", e);
    } else {
      throw $p;
    }
  }
  return tmp;
}
function _get_path_$ref_hpvpv9() {
  return function () {
    return get_path();
  };
}
function fs$delegate$lambda() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp;
  try {
    tmp = eval('require')('fs');
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var e = $p;
      throw UnsupportedOperationException_init_$Create$("Module 'fs' could not be imported", e);
    } else {
      throw $p;
    }
  }
  return tmp;
}
function _get_fs_$ref_rnlob1() {
  return function () {
    return get_fs();
  };
}
function os$delegate$lambda() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp;
  try {
    tmp = eval('require')('os');
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var e = $p;
      throw UnsupportedOperationException_init_$Create$("Module 'os' could not be imported", e);
    } else {
      throw $p;
    }
  }
  return tmp;
}
function _get_os_$ref_hoy4d2() {
  return function () {
    return get_os();
  };
}
function buffer$delegate$lambda() {
  _init_properties_nodeModulesJs_kt__ngjjzw();
  var tmp;
  try {
    tmp = eval('require')('buffer');
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Error) {
      var e = $p;
      throw UnsupportedOperationException_init_$Create$("Module 'buffer' could not be imported", e);
    } else {
      throw $p;
    }
  }
  return tmp;
}
function _get_buffer_$ref_mc964a() {
  return function () {
    return get_buffer();
  };
}
var properties_initialized_nodeModulesJs_kt_oooz8e;
function _init_properties_nodeModulesJs_kt__ngjjzw() {
  if (!properties_initialized_nodeModulesJs_kt_oooz8e) {
    properties_initialized_nodeModulesJs_kt_oooz8e = true;
    path$delegate = lazy(path$delegate$lambda);
    fs$delegate = lazy(fs$delegate$lambda);
    os$delegate = lazy(os$delegate$lambda);
    buffer$delegate = lazy(buffer$delegate$lambda);
  }
}
function get_SystemFileSystem() {
  _init_properties_FileSystemNodeJs_kt__m4c3u();
  return SystemFileSystem;
}
var SystemFileSystem;
function get_isWindows() {
  _init_properties_FileSystemNodeJs_kt__m4c3u();
  return isWindows;
}
var isWindows;
function FileNotFoundException(message) {
  IOException_init_$Init$_0(message, this);
  captureStack(this, FileNotFoundException);
}
function SystemFileSystem$o$metadataOrNull$lambda($path, $metadata) {
  return function () {
    var tmp0_elvis_lhs = get_fs().statSync($path.yq_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stat = tmp;
    var mode = stat.mode;
    var isFile = (mode & get_fs().constants.S_IFMT) === get_fs().constants.S_IFREG;
    $metadata._v = new FileMetadata(isFile, (mode & get_fs().constants.S_IFMT) === get_fs().constants.S_IFDIR, isFile ? toLong(stat.size) : new Long(-1, -1));
    return Unit_instance;
  };
}
function SystemFileSystem$1() {
  SystemFileSystemImpl.call(this);
}
protoOf(SystemFileSystem$1).oq = function (path) {
  return get_fs().existsSync(path.yq_1);
};
protoOf(SystemFileSystem$1).sq = function (path) {
  if (!this.oq(path))
    return null;
  var metadata = {_v: null};
  var tmp0_safe_receiver = withCaughtException(SystemFileSystem$o$metadataOrNull$lambda(path, metadata));
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.also' call
    throw IOException_init_$Create$_1('Stat failed for ' + path.toString(), tmp0_safe_receiver);
  }
  return metadata._v;
};
protoOf(SystemFileSystem$1).pq = function (path) {
  return new FileSource(path);
};
protoOf(SystemFileSystem$1).qq = function (path, append) {
  return new FileSink(path, append);
};
protoOf(SystemFileSystem$1).tq = function (path) {
  if (!this.oq(path))
    throw new FileNotFoundException(path.yq_1);
  return Path_2(get_fs().realpathSync.native(path.yq_1));
};
protoOf(SystemFileSystem$1).uq = function (directory) {
  var tmp0_elvis_lhs = this.sq(directory);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw new FileNotFoundException(directory.yq_1);
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var metadata = tmp;
  if (!metadata.wq_1)
    throw IOException_init_$Create$_0('Not a directory: ' + directory.yq_1);
  var tmp1_elvis_lhs = get_fs().opendirSync(directory.yq_1);
  var tmp_0;
  if (tmp1_elvis_lhs == null) {
    throw IOException_init_$Create$_0('Unable to read directory: ' + directory.yq_1);
  } else {
    tmp_0 = tmp1_elvis_lhs;
  }
  var dir = tmp_0;
  try {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    var child = dir.readSync();
    while (!(child == null)) {
      this_0.e(Path(directory, [child.name]));
      child = dir.readSync();
    }
    return this_0.h4();
  }finally {
    dir.closeSync();
  }
};
var properties_initialized_FileSystemNodeJs_kt_vmmd20;
function _init_properties_FileSystemNodeJs_kt__m4c3u() {
  if (!properties_initialized_FileSystemNodeJs_kt_vmmd20) {
    properties_initialized_FileSystemNodeJs_kt_vmmd20 = true;
    SystemFileSystem = new SystemFileSystem$1();
    isWindows = get_os().platform() === 'win32';
  }
}
function get_SystemPathSeparator() {
  _init_properties_PathsNodeJs_kt__bvvvsp();
  var tmp0 = SystemPathSeparator$delegate;
  var tmp = KProperty0;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('SystemPathSeparator', 0, tmp, _get_SystemPathSeparator_$ref_lvdbpt(), null);
  return tmp0.n2().n1_1;
}
var SystemPathSeparator$delegate;
function Path_1(rawPath, any) {
  this.yq_1 = removeTrailingSeparators(rawPath);
}
protoOf(Path_1).z2 = function () {
  // Inline function 'kotlin.text.isEmpty' call
  var this_0 = this.yq_1;
  if (charSequenceLength(this_0) === 0)
    return '';
  var p = get_path().basename(this.yq_1);
  var tmp;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(p) === 0) {
    tmp = '';
  } else {
    tmp = p;
  }
  return tmp;
};
protoOf(Path_1).toString = function () {
  return this.yq_1;
};
protoOf(Path_1).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Path_1))
    return false;
  return this.yq_1 === other.yq_1;
};
protoOf(Path_1).hashCode = function () {
  return getStringHashCode(this.yq_1);
};
function open($this, path) {
  if (!get_fs().existsSync(path.yq_1)) {
    throw new FileNotFoundException('File does not exist: ' + path.yq_1);
  }
  var fd = {_v: -1};
  var tmp0_safe_receiver = withCaughtException(FileSource$open$lambda(fd, path));
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.also' call
    throw IOException_init_$Create$_1('Failed to open a file ' + path.yq_1 + '.', tmp0_safe_receiver);
  }
  if (fd._v < 0)
    throw IOException_init_$Create$_0('Failed to open a file ' + path.yq_1 + '.');
  return fd._v;
}
function FileSource$open$lambda($fd, $path) {
  return function () {
    $fd._v = get_fs().openSync($path.yq_1, 'r');
    return Unit_instance;
  };
}
function FileSource$readAtMostTo$lambda(this$0) {
  return function () {
    this$0.ar_1 = get_fs().readFileSync(this$0.dr_1, null);
    return Unit_instance;
  };
}
function FileSource(path) {
  this.zq_1 = path;
  this.ar_1 = null;
  this.br_1 = false;
  this.cr_1 = 0;
  this.dr_1 = open(this, this.zq_1);
}
protoOf(FileSource).zo = function (sink, byteCount) {
  // Inline function 'kotlin.check' call
  if (!!this.br_1) {
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if (byteCount.equals(new Long(0, 0))) {
    return new Long(0, 0);
  }
  if (this.ar_1 === null) {
    var tmp0_safe_receiver = withCaughtException(FileSource$readAtMostTo$lambda(this));
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      throw IOException_init_$Create$_1('Failed to read data from ' + this.zq_1.yq_1, tmp0_safe_receiver);
    }
  }
  var len = ensureNotNull(this.ar_1).length;
  if (this.cr_1 >= len) {
    return new Long(-1, -1);
  }
  // Inline function 'kotlinx.io.minOf' call
  var b = len - this.cr_1 | 0;
  // Inline function 'kotlin.comparisons.minOf' call
  var b_0 = toLong(b);
  var bytesToRead = byteCount.a1(b_0) <= 0 ? byteCount : b_0;
  var inductionVariable = new Long(0, 0);
  if (inductionVariable.a1(bytesToRead) < 0)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable.g3(new Long(1, 0));
      var tmp = ensureNotNull(this.ar_1);
      var _unary__edvuaz = this.cr_1;
      this.cr_1 = _unary__edvuaz + 1 | 0;
      sink.lp(tmp.readInt8(_unary__edvuaz));
    }
     while (inductionVariable.a1(bytesToRead) < 0);
  return bytesToRead;
};
protoOf(FileSource).j5 = function () {
  if (!this.br_1) {
    this.br_1 = true;
    get_fs().closeSync(this.dr_1);
  }
};
function open_0($this, path, append) {
  var flags = append ? 'a' : 'w';
  var fd = {_v: -1};
  var tmp0_safe_receiver = withCaughtException(FileSink$open$lambda(fd, path, flags));
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.also' call
    throw IOException_init_$Create$_1('Failed to open a file ' + path.yq_1 + '.', tmp0_safe_receiver);
  }
  if (fd._v < 0)
    throw IOException_init_$Create$_0('Failed to open a file ' + path.yq_1 + '.');
  return fd._v;
}
function FileSink$open$lambda($fd, $path, $flags) {
  return function () {
    $fd._v = get_fs().openSync($path.yq_1, $flags);
    return Unit_instance;
  };
}
function FileSink$write$lambda(this$0, $buf) {
  return function () {
    get_fs().writeFileSync(this$0.fr_1, $buf);
    return Unit_instance;
  };
}
function FileSink(path, append) {
  this.er_1 = false;
  this.fr_1 = open_0(this, path, append);
}
protoOf(FileSink).ap = function (source, byteCount) {
  // Inline function 'kotlin.check' call
  if (!!this.er_1) {
    var message = 'Sink is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if (byteCount.equals(new Long(0, 0))) {
    return Unit_instance;
  }
  // Inline function 'kotlin.comparisons.minOf' call
  var b = source.j();
  var remainingBytes = byteCount.a1(b) <= 0 ? byteCount : b;
  while (remainingBytes.a1(new Long(0, 0)) > 0) {
    var segmentBytes = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.readFromHead' call
    // Inline function 'kotlin.require' call
    if (!!source.jo()) {
      var message_0 = 'Buffer is empty';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var head = ensureNotNull(source.fo_1);
    var tmp0 = head.eq(true);
    var tmp2 = head.po_1;
    segmentBytes = head.qo_1 - tmp2 | 0;
    var buf = get_buffer().Buffer.allocUnsafe(segmentBytes);
    var inductionVariable = 0;
    var last = segmentBytes;
    if (inductionVariable < last)
      do {
        var offset = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buf.writeInt8(tmp0[tmp2 + offset | 0], offset);
      }
       while (inductionVariable < last);
    var tmp0_safe_receiver = withCaughtException(FileSink$write$lambda(this, buf));
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      throw IOException_init_$Create$_1('Write failed', tmp0_safe_receiver);
    }
    var bytesRead = segmentBytes;
    if (!(bytesRead === 0)) {
      if (bytesRead < 0)
        throw IllegalStateException_init_$Create$('Returned negative read bytes count');
      if (bytesRead > head.j())
        throw IllegalStateException_init_$Create$('Returned too many bytes');
      source.vo(toLong(bytesRead));
    }
    var tmp0_0 = remainingBytes;
    // Inline function 'kotlin.Long.minus' call
    var other = segmentBytes;
    remainingBytes = tmp0_0.h3(toLong(other));
  }
};
protoOf(FileSink).j5 = function () {
  if (!this.er_1) {
    this.er_1 = true;
    get_fs().closeSync(this.fr_1);
  }
};
function Path_2(path) {
  _init_properties_PathsNodeJs_kt__bvvvsp();
  return new Path_1(path, null);
}
function SystemPathSeparator$delegate$lambda() {
  _init_properties_PathsNodeJs_kt__bvvvsp();
  var sep = get_path().sep;
  // Inline function 'kotlin.check' call
  if (!(sep.length === 1)) {
    throw IllegalStateException_init_$Create$('Check failed.');
  }
  return new Char(charCodeAt(sep, 0));
}
function _get_SystemPathSeparator_$ref_lvdbpt() {
  return function () {
    return new Char(get_SystemPathSeparator());
  };
}
var properties_initialized_PathsNodeJs_kt_2u5gc7;
function _init_properties_PathsNodeJs_kt__bvvvsp() {
  if (!properties_initialized_PathsNodeJs_kt_2u5gc7) {
    properties_initialized_PathsNodeJs_kt_2u5gc7 = true;
    SystemPathSeparator$delegate = lazy(SystemPathSeparator$delegate$lambda);
  }
}
//region block: post-declaration
protoOf(SystemFileSystemImpl).rq = sink$default;
//endregion
//region block: init
Companion_instance = new Companion();
UnsafeBufferOperations_instance = new UnsafeBufferOperations();
SegmentPool_instance = new SegmentPool();
//endregion
//region block: exports
export {
  FileNotFoundException as FileNotFoundException1fp87nupo9c26,
  Path as Patho2uzee7j6809,
  Path_2 as Path21qufdfgaayly,
  get_SystemFileSystem as get_SystemFileSystemcqw7gp4jhbc7,
  Buffer as Buffergs925ekssbch,
  IOException as IOException1wyutdmfe71nu,
  buffered_0 as buffered1hqdy4i9j28ez,
  buffered as buffered3kq86cdmguv3h,
  readString as readString2nvggcfaijfhd,
  writeCodePointValue as writeCodePointValue2pd8kfyv5jtgh,
  writeString as writeString33ca4btrgctw7,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.mjs.map
