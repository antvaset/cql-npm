import {
  Unit_instance1fbcbse1fwigr as Unit_instance,
  VOID3gxj6tk5isa35 as VOID,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  Enum3alwj03lh1n41 as Enum,
  toString30pk9tzaqopn as toString,
  Exceptiondt2hlxn7j7vw as Exception,
  equals2au1ep9vhcato as equals,
  StringBuilder_init_$Create$2qsge4ydj6bin as StringBuilder_init_$Create$,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  hashCodeq5arwsb9dgti as hashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  Exception_init_$Create$iibqj7jaauav as Exception_init_$Create$,
  stackTraceToString2670q6lbhdojj as stackTraceToString,
  split2bvyvnrlcifjv as split,
  substringBeforekje8w2lxhyb6 as substringBefore,
  substringAfterLastuw9v7gfiiihe as substringAfterLast,
  contains3ue2qo8xhmpf1 as contains,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
function debug(message) {
  var tmp = Level_DEBUG_getInstance();
  return this.d1q(tmp, VOID, KLogger$debug$lambda(message));
}
function warn(throwable, message) {
  var tmp = Level_WARN_getInstance();
  return this.d1q(tmp, VOID, KLogger$warn$lambda(message, throwable));
}
function at$default(level, marker, block, $super) {
  marker = marker === VOID ? null : marker;
  var tmp;
  if ($super === VOID) {
    this.f1q(level, marker, block);
    tmp = Unit_instance;
  } else {
    tmp = $super.f1q.call(this, level, marker, block);
  }
  return tmp;
}
initMetadataForInterface(KLogger, 'KLogger');
initMetadataForClass(KLoggingEventBuilder, 'KLoggingEventBuilder', KLoggingEventBuilder);
initMetadataForObject(KotlinLogging, 'KotlinLogging');
initMetadataForClass(Level, 'Level', VOID, Enum);
initMetadataForObject(DefaultErrorMessageProducer, 'DefaultErrorMessageProducer');
initMetadataForClass(FormattingAppender, 'FormattingAppender');
initMetadataForClass(DefaultMessageFormatter, 'DefaultMessageFormatter', DefaultMessageFormatter);
initMetadataForClass(KLoggingEvent, 'KLoggingEvent');
initMetadataForClass(KLoggerDirect, 'KLoggerDirect', VOID, VOID, [KLogger]);
initMetadataForObject(KLoggerFactory, 'KLoggerFactory');
initMetadataForClass(ConsoleOutputAppender, 'ConsoleOutputAppender', ConsoleOutputAppender, FormattingAppender);
initMetadataForObject(KotlinLoggingConfiguration, 'KotlinLoggingConfiguration');
initMetadataForObject(KLoggerNameResolver, 'KLoggerNameResolver');
//endregion
function KLogger$debug$lambda($message) {
  return function ($this$at) {
    $this$at.x1p_1 = toStringSafe($message);
    return Unit_instance;
  };
}
function KLogger$warn$lambda($message, $throwable) {
  return function ($this$at) {
    $this$at.x1p_1 = toStringSafe($message);
    $this$at.y1p_1 = $throwable;
    return Unit_instance;
  };
}
function KLogger() {
}
function KLoggingEventBuilder() {
  this.x1p_1 = null;
  this.y1p_1 = null;
  this.z1p_1 = null;
  this.a1q_1 = null;
  this.b1q_1 = null;
}
function KotlinLogging() {
}
protoOf(KotlinLogging).g1q = function (func) {
  return this.i1q(KLoggerNameResolver_instance.h1q(func));
};
protoOf(KotlinLogging).i1q = function (name) {
  return KLoggerFactory_instance.i1q(name);
};
var KotlinLogging_instance;
function KotlinLogging_getInstance() {
  return KotlinLogging_instance;
}
var Level_TRACE_instance;
var Level_DEBUG_instance;
var Level_INFO_instance;
var Level_WARN_instance;
var Level_ERROR_instance;
var Level_OFF_instance;
var Level_entriesInitialized;
function Level_initEntries() {
  if (Level_entriesInitialized)
    return Unit_instance;
  Level_entriesInitialized = true;
  Level_TRACE_instance = new Level('TRACE', 0, 0, 'TRACE');
  Level_DEBUG_instance = new Level('DEBUG', 1, 10, 'DEBUG');
  Level_INFO_instance = new Level('INFO', 2, 20, 'INFO');
  Level_WARN_instance = new Level('WARN', 3, 30, 'WARN');
  Level_ERROR_instance = new Level('ERROR', 4, 40, 'ERROR');
  Level_OFF_instance = new Level('OFF', 5, 50, 'OFF');
}
function Level(name, ordinal, levelInt, levelStr) {
  Enum.call(this, name, ordinal);
  this.l1q_1 = levelInt;
  this.m1q_1 = levelStr;
}
protoOf(Level).toString = function () {
  return this.m1q_1;
};
function Level_DEBUG_getInstance() {
  Level_initEntries();
  return Level_DEBUG_instance;
}
function Level_INFO_getInstance() {
  Level_initEntries();
  return Level_INFO_instance;
}
function Level_WARN_getInstance() {
  Level_initEntries();
  return Level_WARN_instance;
}
function toStringSafe(_this__u8e3s4) {
  var tmp;
  try {
    tmp = toString(_this__u8e3s4());
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Exception) {
      var e = $p;
      tmp_0 = DefaultErrorMessageProducer_instance.n1q(e);
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  return tmp;
}
function DefaultErrorMessageProducer() {
}
protoOf(DefaultErrorMessageProducer).n1q = function (e) {
  return 'Log message invocation failed: ' + e.toString();
};
var DefaultErrorMessageProducer_instance;
function DefaultErrorMessageProducer_getInstance() {
  return DefaultErrorMessageProducer_instance;
}
function FormattingAppender() {
}
protoOf(FormattingAppender).p1q = function (loggingEvent) {
  // Inline function 'kotlin.let' call
  var it = KotlinLoggingConfiguration_getInstance().r1q_1.t1q(loggingEvent);
  this.o1q(loggingEvent, it);
};
function prefix($this, level, loggerName) {
  var tmp;
  if ($this.u1q_1) {
    tmp = level.x2_1 + ': [' + loggerName + '] ';
  } else {
    tmp = '';
  }
  return tmp;
}
function throwableToString($this, _this__u8e3s4) {
  return createThrowableMsg($this, '', _this__u8e3s4);
}
function createThrowableMsg($this, msg, throwable) {
  var $this_0 = $this;
  var msg_0 = msg;
  var throwable_0 = throwable;
  $l$1: do {
    $l$0: do {
      var tmp;
      if (throwable_0 == null || equals(throwable_0.cause, throwable_0)) {
        tmp = msg_0;
      } else {
        var tmp0 = $this_0;
        var tmp1 = msg_0 + ", Caused by: '" + throwable_0.message + "'";
        var tmp2 = throwable_0.cause;
        $this_0 = tmp0;
        msg_0 = tmp1;
        throwable_0 = tmp2;
        continue $l$0;
      }
      return tmp;
    }
     while (false);
  }
   while (true);
}
function DefaultMessageFormatter(includePrefix) {
  includePrefix = includePrefix === VOID ? true : includePrefix;
  this.u1q_1 = includePrefix;
}
protoOf(DefaultMessageFormatter).t1q = function (loggingEvent) {
  // Inline function 'kotlin.with' call
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.j9(prefix(this, loggingEvent.v1q_1, loggingEvent.x1q_1));
  var tmp0_safe_receiver = loggingEvent.w1q_1;
  var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b1r();
  if (tmp1_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    this_0.j9(tmp1_safe_receiver);
    this_0.j9(' ');
  }
  this_0.j9(loggingEvent.y1q_1);
  this_0.j9(throwableToString(this, loggingEvent.z1q_1));
  return this_0.toString();
};
function KLoggingEvent_init_$Init$(level, marker, loggerName, eventBuilder, $this) {
  KLoggingEvent.call($this, level, marker, loggerName, eventBuilder.x1p_1, eventBuilder.y1p_1, eventBuilder.z1p_1);
  return $this;
}
function KLoggingEvent_init_$Create$(level, marker, loggerName, eventBuilder) {
  return KLoggingEvent_init_$Init$(level, marker, loggerName, eventBuilder, objectCreate(protoOf(KLoggingEvent)));
}
function KLoggingEvent(level, marker, loggerName, message, cause, payload) {
  message = message === VOID ? null : message;
  cause = cause === VOID ? null : cause;
  payload = payload === VOID ? null : payload;
  this.v1q_1 = level;
  this.w1q_1 = marker;
  this.x1q_1 = loggerName;
  this.y1q_1 = message;
  this.z1q_1 = cause;
  this.a1r_1 = payload;
}
protoOf(KLoggingEvent).toString = function () {
  return 'KLoggingEvent(level=' + this.v1q_1.toString() + ', marker=' + toString(this.w1q_1) + ', loggerName=' + this.x1q_1 + ', message=' + this.y1q_1 + ', cause=' + toString(this.z1q_1) + ', payload=' + toString(this.a1r_1) + ')';
};
protoOf(KLoggingEvent).hashCode = function () {
  var result = this.v1q_1.hashCode();
  result = imul(result, 31) + (this.w1q_1 == null ? 0 : hashCode(this.w1q_1)) | 0;
  result = imul(result, 31) + getStringHashCode(this.x1q_1) | 0;
  result = imul(result, 31) + (this.y1q_1 == null ? 0 : getStringHashCode(this.y1q_1)) | 0;
  result = imul(result, 31) + (this.z1q_1 == null ? 0 : hashCode(this.z1q_1)) | 0;
  result = imul(result, 31) + (this.a1r_1 == null ? 0 : hashCode(this.a1r_1)) | 0;
  return result;
};
protoOf(KLoggingEvent).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof KLoggingEvent))
    return false;
  var tmp0_other_with_cast = other instanceof KLoggingEvent ? other : THROW_CCE();
  if (!this.v1q_1.equals(tmp0_other_with_cast.v1q_1))
    return false;
  if (!equals(this.w1q_1, tmp0_other_with_cast.w1q_1))
    return false;
  if (!(this.x1q_1 === tmp0_other_with_cast.x1q_1))
    return false;
  if (!(this.y1q_1 == tmp0_other_with_cast.y1q_1))
    return false;
  if (!equals(this.z1q_1, tmp0_other_with_cast.z1q_1))
    return false;
  if (!equals(this.a1r_1, tmp0_other_with_cast.a1r_1))
    return false;
  return true;
};
function isLoggingEnabled(_this__u8e3s4) {
  return _this__u8e3s4.y2_1 >= KotlinLoggingConfiguration_getInstance().q1q_1.y2_1;
}
function KLoggerDirect(name) {
  this.c1r_1 = name;
}
protoOf(KLoggerDirect).f1q = function (level, marker, block) {
  if (this.d1r(level, marker)) {
    // Inline function 'kotlin.apply' call
    var this_0 = new KLoggingEventBuilder();
    block(this_0);
    // Inline function 'kotlin.run' call
    if (level.y2_1 !== 5) {
      KotlinLoggingConfiguration_getInstance().s1q_1.p1q(KLoggingEvent_init_$Create$(level, marker, this.c1r_1, this_0));
    }
  }
};
protoOf(KLoggerDirect).d1r = function (level, marker) {
  return isLoggingEnabled(level);
};
function KLoggerFactory() {
}
protoOf(KLoggerFactory).i1q = function (name) {
  return new KLoggerDirect(name);
};
var KLoggerFactory_instance;
function KLoggerFactory_getInstance() {
  return KLoggerFactory_instance;
}
function ConsoleOutputAppender() {
  FormattingAppender.call(this);
}
protoOf(ConsoleOutputAppender).o1q = function (loggingEvent, formattedMessage) {
  switch (loggingEvent.v1q_1.y2_1) {
    case 0:
      console.log(formattedMessage);
      break;
    case 1:
      console.log(formattedMessage);
      break;
    case 2:
      console.info(formattedMessage);
      break;
    case 3:
      console.warn(formattedMessage);
      break;
    case 4:
      console.error(formattedMessage);
      break;
    case 5:
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
};
function KotlinLoggingConfiguration() {
  KotlinLoggingConfiguration_instance = this;
  this.q1q_1 = Level_INFO_getInstance();
  this.r1q_1 = new DefaultMessageFormatter(true);
  this.s1q_1 = new ConsoleOutputAppender();
}
var KotlinLoggingConfiguration_instance;
function KotlinLoggingConfiguration_getInstance() {
  if (KotlinLoggingConfiguration_instance == null)
    new KotlinLoggingConfiguration();
  return KotlinLoggingConfiguration_instance;
}
function KLoggerNameResolver() {
}
protoOf(KLoggerNameResolver).h1q = function (func) {
  var found = false;
  var exception = Exception_init_$Create$();
  var _iterator__ex2g4s = split(stackTraceToString(exception), ['\n']).g();
  while (_iterator__ex2g4s.h()) {
    var line = _iterator__ex2g4s.i();
    if (found) {
      return substringAfterLast(substringAfterLast(substringBefore(line, '.kt'), '.'), '/');
    }
    if (contains(line, 'at KotlinLogging')) {
      found = true;
    }
  }
  return '';
};
var KLoggerNameResolver_instance;
function KLoggerNameResolver_getInstance() {
  return KLoggerNameResolver_instance;
}
//region block: post-declaration
protoOf(KLoggerDirect).d1q = at$default;
protoOf(KLoggerDirect).c1q = debug;
protoOf(KLoggerDirect).e1q = warn;
//endregion
//region block: init
KotlinLogging_instance = new KotlinLogging();
DefaultErrorMessageProducer_instance = new DefaultErrorMessageProducer();
KLoggerFactory_instance = new KLoggerFactory();
KLoggerNameResolver_instance = new KLoggerNameResolver();
//endregion
//region block: exports
export {
  KotlinLogging_instance as KotlinLogging_instance177vcamif7bv,
};
//endregion

//# sourceMappingURL=kotlin-logging.mjs.map
