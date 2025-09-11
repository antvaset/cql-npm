import {
  iterator3f5i676wpaa3g as iterator,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  protoOf180f3jzyo7rfj as protoOf,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  SequenceScope1coiso86pqzq2 as SequenceScope,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  VOID3gxj6tk5isa35 as VOID,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var constructor = (class IteratorYieldResult {
    static [Symbol.hasInstance](instance) {
        return instance && (typeof instance === 'object') && (instance.done === false)
    }
    }.prototype).constructor;
//endregion
//region block: pre-declaration
initMetadataForLambda(iteratorFor$slambda, CoroutineImpl, VOID, [1]);
//endregion
function get_POW() {
  _init_properties_BigInt_kt__agomkx();
  return POW;
}
var POW;
function get_n(_this__u8e3s4) {
  _init_properties_BigInt_kt__agomkx();
  return BigInt(_this__u8e3s4);
}
var properties_initialized_BigInt_kt_nhzooh;
function _init_properties_BigInt_kt__agomkx() {
  if (!properties_initialized_BigInt_kt_nhzooh) {
    properties_initialized_BigInt_kt_nhzooh = true;
    POW = Function('base', 'exponent', 'return base ** exponent');
  }
}
function invoke(_this__u8e3s4, p1, p2) {
  // Inline function 'kotlin.js.asDynamic' call
  return _this__u8e3s4(p1, p2);
}
function iteratorFor(source) {
  // Inline function 'js.iterable.JsIteratorLike.iterator' call
  var this_0 = source[Symbol.iterator]();
  return iteratorFor_0(this_0);
}
function iteratorFor_0(source) {
  return iterator(iteratorFor$slambda_0(source, null));
}
function iteratorFor$slambda($source, resultContinuation) {
  this.h22_1 = $source;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(iteratorFor$slambda).m22 = function ($this$iterator, $completion) {
  var tmp = this.n22($this$iterator, $completion);
  tmp.aa_1 = Unit_instance;
  tmp.ba_1 = null;
  return tmp.ga();
};
protoOf(iteratorFor$slambda).ya = function (p1, $completion) {
  return this.m22(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
};
protoOf(iteratorFor$slambda).ga = function () {
  var suspendResult = this.aa_1;
  $sm: do
    try {
      var tmp = this.y9_1;
      switch (tmp) {
        case 0:
          this.z9_1 = 5;
          this.y9_1 = 1;
          continue $sm;
        case 1:
          var tmp_0 = this;
          var tmp_1 = this.h22_1.next();
          tmp_0.j22_1 = tmp_1 instanceof constructor ? tmp_1 : null;
          if (this.j22_1 == null) {
            this.y9_1 = 4;
            var tmp_2 = this;
            continue $sm;
          } else {
            this.k22_1 = this.j22_1;
            this.y9_1 = 2;
            continue $sm;
          }

        case 2:
          this.l22_1 = this.k22_1;
          this.y9_1 = 3;
          suspendResult = this.i22_1.ch(this.l22_1.value, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 3:
          this.y9_1 = 1;
          continue $sm;
        case 4:
          return Unit_instance;
        case 5:
          throw this.ba_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.z9_1 === 5) {
        throw e;
      } else {
        this.y9_1 = this.z9_1;
        this.ba_1 = e;
      }
    }
   while (true);
};
protoOf(iteratorFor$slambda).n22 = function ($this$iterator, completion) {
  var i = new iteratorFor$slambda(this.h22_1, completion);
  i.i22_1 = $this$iterator;
  return i;
};
function iteratorFor$slambda_0($source, resultContinuation) {
  var i = new iteratorFor$slambda($source, resultContinuation);
  var l = function ($this$iterator, $completion) {
    return i.m22($this$iterator, $completion);
  };
  l.$arity = 1;
  return l;
}
//region block: exports
export {
  iteratorFor_0 as iteratorFor22ddlwuhb3v18,
  iteratorFor as iteratorFor1utuumlelyu8r,
};
//endregion

//# sourceMappingURL=kotlin-js.mjs.map
