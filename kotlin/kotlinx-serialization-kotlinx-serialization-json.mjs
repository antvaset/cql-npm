import {
  EmptySerializersModule991ju6pz9b79 as EmptySerializersModule,
  Decoder23nde051s631g as Decoder,
  CompositeDecoder2tzm7wpwkr0og as CompositeDecoder,
  SerializerFactory1qv9hivitncuv as SerializerFactory,
  serializer1x79l67jvwntn as serializer,
  InlinePrimitiveDescriptor3i6ccn1a4fw94 as InlinePrimitiveDescriptor,
  SEALED_getInstance3nsev85ow9059 as SEALED_getInstance,
  buildSerialDescriptor2873qmkp8r2ib as buildSerialDescriptor,
  KSerializerzf77vz1967fq as KSerializer,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SerialDescriptor2pelqekb5ic3a as SerialDescriptor,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  STRING_getInstance2ou4lro9xn2qn as STRING_getInstance,
  ENUM_getInstance22lfbrqor0c0a as ENUM_getInstance,
  PrimitiveSerialDescriptor3egfp53lutxj2 as PrimitiveSerialDescriptor,
  serializer2lw83vwvpnyms as serializer_0,
  get_isNullable36pbikm8xb7bz as get_isNullable,
  get_isInline5x26qrhi9qs6 as get_isInline,
  get_annotationshjxdbdcl8kmv as get_annotations,
  Encoderqvmrpqtq8hnu as Encoder,
  CompositeEncoderknecpkexzn3v as CompositeEncoder,
  ElementMarker33ojvsajwmzts as ElementMarker,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  SerializationException_init_$Init$nhp5tm45z5re as SerializationException_init_$Init$,
  SerializationException_init_$Create$1b97dv9p64p50 as SerializationException_init_$Create$,
  CLASS_getInstance14ex35co4jkrb as CLASS_getInstance,
  LIST_getInstancey7k5h8d5cvxt as LIST_getInstance,
  CONTEXTUAL_getInstance1845118lbzky0 as CONTEXTUAL_getInstance,
  PolymorphicKindla9gurooefwb as PolymorphicKind,
  PrimitiveKindndgbuh6is7ze as PrimitiveKind,
  MAP_getInstance3s1t6byguxmp9 as MAP_getInstance,
  ENUMlmq49cvwy4ow as ENUM,
  contextual3hpp1gupsu4al as contextual,
  SerializersModuleCollector3dddz14wd7brg as SerializersModuleCollector,
  SealedClassSerializeriwipiibk55zc as SealedClassSerializer,
  jsonCachedSerialNameslxufy2gu43jt as jsonCachedSerialNames,
  AbstractDecoder35guh02ubh2hm as AbstractDecoder,
  AbstractPolymorphicSerializer1ccxwp48nfy58 as AbstractPolymorphicSerializer,
  DeserializationStrategy1z3z5pj9f7zc8 as DeserializationStrategy,
  findPolymorphicSerializer1nm87hvemahcj as findPolymorphicSerializer,
  MissingFieldException24tqif29emcmi as MissingFieldException,
  AbstractEncoder2gxtu3xmy3f8j as AbstractEncoder,
  OBJECT_getInstance26229tfe4t547 as OBJECT_getInstance,
  findPolymorphicSerializerk638ixyjovk5 as findPolymorphicSerializer_0,
  SerializationStrategyh6ouydnm6hci as SerializationStrategy,
  serializer3ikrxnm8b29d6 as serializer_1,
  serializer36584sjyg5661 as serializer_2,
  serializer1q7c5q67ysppr as serializer_3,
  NamedValueDecoderzk26ztf92xbq as NamedValueDecoder,
  NamedValueEncoder1lca9edk1lf89 as NamedValueEncoder,
  getContextualDescriptor2n1gf3b895yb8 as getContextualDescriptor,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  VOID3gxj6tk5isa35 as VOID,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  toString1pkumu07cwy4m as toString,
  IllegalArgumentException_init_$Create$3ewkh27kzt8z8 as IllegalArgumentException_init_$Create$,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  _Char___init__impl__6a9atx2js6krycynjoo as _Char___init__impl__6a9atx,
  equals2au1ep9vhcato as equals,
  toString30pk9tzaqopn as toString_0,
  Enum3alwj03lh1n41 as Enum,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  StringBuilder_init_$Create$2qsge4ydj6bin as StringBuilder_init_$Create$,
  hashCodeq5arwsb9dgti as hashCode,
  joinToString1cxrrlmo0chqs as joinToString,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  KtMap140uvy3s5zad8 as KtMap,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  getBooleanHashCode1bbj3u6b3v0a7 as getBooleanHashCode,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  KtList3hktaavzmj137 as KtList,
  toDouble1kn912gjoizjp as toDouble,
  IllegalStateException_init_$Create$2w9444nebyjns as IllegalStateException_init_$Create$,
  NumberFormatException_init_$Create$361k2w325ylq7 as NumberFormatException_init_$Create$,
  numberRangeToNumber25vse2rgp6rs8 as numberRangeToNumber,
  ClosedRangehokgr73im9z3 as ClosedRange,
  isInterface3d6p8outrmvmk as isInterface,
  contains2c50nlxg7en7o as contains,
  StringCompanionObject_instance3alxothmy382k as StringCompanionObject_instance,
  LinkedHashMap_init_$Create$1f9mb1z5f3dxn as LinkedHashMap_init_$Create$,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  toLongOrNullutqivezb0wx1 as toLongOrNull,
  toULongOrNullojoyxi0i9tgj as toULongOrNull,
  ULong3f9k7s38t3rfp as ULong,
  Companion_getInstance1puqqwzccfvrg as Companion_getInstance,
  _ULong___get_data__impl__fggpzb2qlkrfp9zs48z as _ULong___get_data__impl__fggpzb,
  toDoubleOrNullkxwozihadygj as toDoubleOrNull,
  toBooleanStrictOrNull2j0md398tkvbj as toBooleanStrictOrNull,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef1ajb9in178r5r as getPropertyCallableRef,
  lazy2hsh8ze7j6ikd as lazy,
  toLongw1zpgk99d84b as toLong,
  _UInt___init__impl__l7qpdltd1eeof8nsuj as _UInt___init__impl__l7qpdl,
  UInt__toString_impl_dbgl213fqto411a11p0 as UInt__toString_impl_dbgl21,
  _ULong___init__impl__c78o9k1p6qzv0dh0bvg as _ULong___init__impl__c78o9k,
  ULong__toString_impl_f9au7kivnvhcxkib53 as ULong__toString_impl_f9au7k,
  _UByte___init__impl__g9hnc43ude1dscg1q30 as _UByte___init__impl__g9hnc4,
  UByte__toString_impl_v72jg2vnfngefiworp as UByte__toString_impl_v72jg,
  _UShort___init__impl__jigrne2jag2u7194ozm as _UShort___init__impl__jigrne,
  UShort__toString_impl_edaoee3e5ovvzk9wm4f as UShort__toString_impl_edaoee,
  captureStack1fzi4aczwc4hg as captureStack,
  charSequenceSubSequence1iwpdba8s3jc7 as charSequenceSubSequence,
  coerceAtLeast2bkz8m9ik7hep as coerceAtLeast,
  coerceAtMost322komnqp70ag as coerceAtMost,
  Collection1k04j3hzsbod0 as Collection,
  ArrayList_init_$Create$149jv2ovkkvnt as ArrayList_init_$Create$,
  singleOrNullrknfaxokm1sl as singleOrNull,
  emptyMapr06gerzljqtm as emptyMap,
  getValue48kllevslyh6 as getValue,
  copyOf2ng0t8oizk6it as copyOf,
  arrayCopytctsywo3h7gj as arrayCopy,
  DeepRecursiveFunction3r49v8igsve1g as DeepRecursiveFunction,
  invoke246lvi6tzooz1 as invoke,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  DeepRecursiveScope1pqaydvh4vdcu as DeepRecursiveScope,
  Unitkvevlwgzwiuc as Unit,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  getKClass1s3j9wy1cofik as getKClass,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  substringBefore3n7kj60w69hju as substringBefore,
  removeSuffix3d61x5lsuvuho as removeSuffix,
  substringAfter1hku067gwr5ve as substringAfter,
  contains3ue2qo8xhmpf1 as contains_0,
  plus17rl43at52ays as plus,
  IllegalArgumentException2asla15b5jaob as IllegalArgumentException,
  isFinite1tx0gn65nl9tj as isFinite,
  isFinite2t9l5a275mxm6 as isFinite_0,
  charCodeAt1yspne1d8erbm as charCodeAt,
  toUInt21lx0mz8wkp7c as toUInt,
  _UInt___get_data__impl__f0vqqw13y1a2xkii3dn as _UInt___get_data__impl__f0vqqw,
  toULong266mnyksbttkw as toULong,
  toUByteh6p4wmqswkrs as toUByte,
  _UByte___get_data__impl__jof9qr2p2xx2i2jvnz8 as _UByte___get_data__impl__jof9qr,
  toUShort7yqspfnhrot4 as toUShort,
  _UShort___get_data__impl__g0245hlms5v6vgvnl as _UShort___get_data__impl__g0245,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  toString3o7ifthqydp6e as toString_1,
  Companion_getInstanceuedpedmz4g65 as Companion_getInstance_0,
  Companion_getInstance1trnkq9cty7vr as Companion_getInstance_1,
  Companion_getInstance2du03jiluw9jj as Companion_getInstance_2,
  setOf45ia9pnfhe90 as setOf,
  Char__toInt_impl_vasixd1agw9q2fuvclj as Char__toInt_impl_vasixd,
  numberToChar93r9buh19yek as numberToChar,
  equals2v6cggk171b6e as equals_0,
  toByte4i43936u611k as toByte,
  startsWith26w8qjqapeeq6 as startsWith,
  single29ec4rh52687r as single,
  Char19o2r8palgjof as Char,
  emptySetcxexqki71qfa as emptySet,
  plus1ogy4liedzq5j as plus_0,
  toInt2q8uldh7sc951 as toInt,
  toList3jhuyej2anx2q as toList,
  throwUninitializedPropertyAccessExceptionyynx7gkm73wd as throwUninitializedPropertyAccessException,
  enumEntries20mr21zbe3az4 as enumEntries,
  last1vo29oleiqj36 as last,
  removeLast3759euu1xvfa3 as removeLast,
  lastIndexOf2d52xhix5ymjr as lastIndexOf,
  Long2qws0ah9gnpki as Long,
  Char__minus_impl_a2frrh3548ixwefqxih as Char__minus_impl_a2frrh,
  numberToLong1a4cndvg6c52s as numberToLong,
  charArray2ujmm1qusno00 as charArray,
  indexOfwa4w6635jewi as indexOf,
  indexOf1xbs558u7wr52 as indexOf_0,
  substringiqarkczpya5m as substring,
  HashMap_init_$Create$36kepqnl5avn5 as HashMap_init_$Create$,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForClass(Json, 'Json');
initMetadataForObject(Default, 'Default', VOID, Json);
initMetadataForClass(JsonBuilder, 'JsonBuilder');
initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
initMetadataForClass(JsonNames, 'JsonNames');
initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
initMetadataForCompanion(Companion);
initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
initMetadataForCompanion(Companion_0);
initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
initMetadataForCompanion(Companion_1);
initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
initMetadataForCompanion(Companion_2);
initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
initMetadataForClass(JsonObjectBuilder, 'JsonObjectBuilder');
initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
initMetadataForClass(Composer, 'Composer');
initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', VOID, Composer);
initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', VOID, Composer);
initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
initMetadataForObject(Tombstone, 'Tombstone');
initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
initMetadataForCompanion(Companion_3);
initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
initMetadataForClass(Key, 'Key', Key);
initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
initMetadataForClass(AbstractJsonTreeEncoder, 'AbstractJsonTreeEncoder', VOID, NamedValueEncoder, [NamedValueEncoder, JsonEncoder]);
initMetadataForClass(JsonTreeEncoder, 'JsonTreeEncoder', VOID, AbstractJsonTreeEncoder);
initMetadataForClass(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1, VOID, VOID, AbstractEncoder);
initMetadataForClass(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1, VOID, VOID, AbstractEncoder);
initMetadataForClass(JsonPrimitiveEncoder, 'JsonPrimitiveEncoder', VOID, AbstractJsonTreeEncoder);
initMetadataForClass(JsonTreeListEncoder, 'JsonTreeListEncoder', VOID, AbstractJsonTreeEncoder);
initMetadataForClass(JsonTreeMapEncoder, 'JsonTreeMapEncoder', VOID, JsonTreeEncoder);
initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
initMetadataForObject(CharMappings, 'CharMappings');
initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
//endregion
function Default() {
  Default_instance = this;
  Json.call(this, new JsonConfiguration(), EmptySerializersModule());
}
var Default_instance;
function Default_getInstance() {
  if (Default_instance == null)
    new Default();
  return Default_instance;
}
function Json(configuration, serializersModule) {
  Default_getInstance();
  this.b1c_1 = configuration;
  this.c1c_1 = serializersModule;
  this.d1c_1 = new DescriptorSchemaCache();
}
protoOf(Json).vu = function () {
  return this.c1c_1;
};
protoOf(Json).e1c = function (deserializer, string) {
  var lexer = StringJsonLexer_0(this, string);
  var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.fr(), null);
  var result = input.fu(deserializer);
  lexer.t1c();
  return result;
};
protoOf(Json).f1c = function (serializer, value) {
  return writeJson(this, value, serializer);
};
protoOf(Json).g1c = function (string) {
  return this.e1c(JsonElementSerializer_getInstance(), string);
};
function Json_0(from, builderAction) {
  from = from === VOID ? Default_getInstance() : from;
  var builder = new JsonBuilder(from);
  builderAction(builder);
  var conf = builder.m1d();
  return new JsonImpl(conf, builder.l1d_1);
}
function JsonBuilder(json) {
  this.u1c_1 = json.b1c_1.n1d_1;
  this.v1c_1 = json.b1c_1.s1d_1;
  this.w1c_1 = json.b1c_1.o1d_1;
  this.x1c_1 = json.b1c_1.p1d_1;
  this.y1c_1 = json.b1c_1.r1d_1;
  this.z1c_1 = json.b1c_1.t1d_1;
  this.a1d_1 = json.b1c_1.u1d_1;
  this.b1d_1 = json.b1c_1.w1d_1;
  this.c1d_1 = json.b1c_1.d1e_1;
  this.d1d_1 = json.b1c_1.y1d_1;
  this.e1d_1 = json.b1c_1.z1d_1;
  this.f1d_1 = json.b1c_1.a1e_1;
  this.g1d_1 = json.b1c_1.b1e_1;
  this.h1d_1 = json.b1c_1.c1e_1;
  this.i1d_1 = json.b1c_1.x1d_1;
  this.j1d_1 = json.b1c_1.q1d_1;
  this.k1d_1 = json.b1c_1.v1d_1;
  this.l1d_1 = json.vu();
}
protoOf(JsonBuilder).m1d = function () {
  if (this.k1d_1) {
    // Inline function 'kotlin.require' call
    if (!(this.b1d_1 === 'type')) {
      var message = 'Class discriminator should not be specified when array polymorphism is specified';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!this.c1d_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
      var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  if (!this.y1c_1) {
    // Inline function 'kotlin.require' call
    if (!(this.z1c_1 === '    ')) {
      var message_1 = 'Indent should not be specified when default printing mode is used';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  } else if (!(this.z1c_1 === '    ')) {
    var tmp0 = this.z1c_1;
    var tmp$ret$7;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(tmp0)) {
        var element = charSequenceGet(tmp0, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
          tmp$ret$7 = false;
          break $l$block;
        }
      }
      tmp$ret$7 = true;
    }
    var allWhitespaces = tmp$ret$7;
    // Inline function 'kotlin.require' call
    if (!allWhitespaces) {
      var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.z1c_1;
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
  }
  return new JsonConfiguration(this.u1c_1, this.w1c_1, this.x1c_1, this.j1d_1, this.y1c_1, this.v1c_1, this.z1c_1, this.a1d_1, this.k1d_1, this.b1d_1, this.i1d_1, this.d1d_1, this.e1d_1, this.f1d_1, this.g1d_1, this.h1d_1, this.c1d_1);
};
function validateConfiguration($this) {
  if (equals($this.vu(), EmptySerializersModule()))
    return Unit_instance;
  var collector = new JsonSerializersModuleValidator($this.b1c_1);
  $this.vu().j1b(collector);
}
function JsonImpl(configuration, module_0) {
  Json.call(this, configuration, module_0);
  validateConfiguration(this);
}
function JsonClassDiscriminator() {
}
function JsonIgnoreUnknownKeys() {
}
function JsonNames() {
}
function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
  encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
  ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
  isLenient = isLenient === VOID ? false : isLenient;
  allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
  prettyPrint = prettyPrint === VOID ? false : prettyPrint;
  explicitNulls = explicitNulls === VOID ? true : explicitNulls;
  prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
  coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
  useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
  classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
  allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
  useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
  namingStrategy = namingStrategy === VOID ? null : namingStrategy;
  decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
  allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
  allowComments = allowComments === VOID ? false : allowComments;
  classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
  this.n1d_1 = encodeDefaults;
  this.o1d_1 = ignoreUnknownKeys;
  this.p1d_1 = isLenient;
  this.q1d_1 = allowStructuredMapKeys;
  this.r1d_1 = prettyPrint;
  this.s1d_1 = explicitNulls;
  this.t1d_1 = prettyPrintIndent;
  this.u1d_1 = coerceInputValues;
  this.v1d_1 = useArrayPolymorphism;
  this.w1d_1 = classDiscriminator;
  this.x1d_1 = allowSpecialFloatingPointValues;
  this.y1d_1 = useAlternativeNames;
  this.z1d_1 = namingStrategy;
  this.a1e_1 = decodeEnumsCaseInsensitive;
  this.b1e_1 = allowTrailingComma;
  this.c1e_1 = allowComments;
  this.d1e_1 = classDiscriminatorMode;
}
protoOf(JsonConfiguration).toString = function () {
  return 'JsonConfiguration(encodeDefaults=' + this.n1d_1 + ', ignoreUnknownKeys=' + this.o1d_1 + ', isLenient=' + this.p1d_1 + ', ' + ('allowStructuredMapKeys=' + this.q1d_1 + ', prettyPrint=' + this.r1d_1 + ', explicitNulls=' + this.s1d_1 + ', ') + ("prettyPrintIndent='" + this.t1d_1 + "', coerceInputValues=" + this.u1d_1 + ', useArrayPolymorphism=' + this.v1d_1 + ', ') + ("classDiscriminator='" + this.w1d_1 + "', allowSpecialFloatingPointValues=" + this.x1d_1 + ', ') + ('useAlternativeNames=' + this.y1d_1 + ', namingStrategy=' + toString_0(this.z1d_1) + ', decodeEnumsCaseInsensitive=' + this.a1e_1 + ', ') + ('allowTrailingComma=' + this.b1e_1 + ', allowComments=' + this.c1e_1 + ', classDiscriminatorMode=' + this.d1e_1.toString() + ')');
};
var ClassDiscriminatorMode_NONE_instance;
var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
var ClassDiscriminatorMode_POLYMORPHIC_instance;
var ClassDiscriminatorMode_entriesInitialized;
function ClassDiscriminatorMode_initEntries() {
  if (ClassDiscriminatorMode_entriesInitialized)
    return Unit_instance;
  ClassDiscriminatorMode_entriesInitialized = true;
  ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
  ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
  ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
}
function ClassDiscriminatorMode(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function ClassDiscriminatorMode_NONE_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_NONE_instance;
}
function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
  ClassDiscriminatorMode_initEntries();
  return ClassDiscriminatorMode_POLYMORPHIC_instance;
}
function JsonDecoder() {
}
function get_jsonUnquotedLiteralDescriptor() {
  _init_properties_JsonElement_kt__7cbdc2();
  return jsonUnquotedLiteralDescriptor;
}
var jsonUnquotedLiteralDescriptor;
function Companion() {
}
var Companion_instance;
function Companion_getInstance_3() {
  return Companion_instance;
}
function JsonElement() {
}
function Companion_0() {
}
var Companion_instance_0;
function Companion_getInstance_4() {
  return Companion_instance_0;
}
function JsonObject$toString$lambda(_destruct__k2r9zo) {
  // Inline function 'kotlin.collections.component1' call
  var k = _destruct__k2r9zo.m2();
  // Inline function 'kotlin.collections.component2' call
  var v = _destruct__k2r9zo.n2();
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  printQuoted(this_0, k);
  this_0.k9(_Char___init__impl__6a9atx(58));
  this_0.i9(v);
  return this_0.toString();
}
function JsonObject(content) {
  JsonElement.call(this);
  this.g1e_1 = content;
}
protoOf(JsonObject).equals = function (other) {
  return equals(this.g1e_1, other);
};
protoOf(JsonObject).hashCode = function () {
  return hashCode(this.g1e_1);
};
protoOf(JsonObject).toString = function () {
  var tmp = this.g1e_1.t2();
  return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
};
protoOf(JsonObject).q = function () {
  return this.g1e_1.q();
};
protoOf(JsonObject).h1e = function (key) {
  return this.g1e_1.o2(key);
};
protoOf(JsonObject).o2 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return false;
  return this.h1e((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).i1e = function (value) {
  return this.g1e_1.p2(value);
};
protoOf(JsonObject).p2 = function (value) {
  if (!(value instanceof JsonElement))
    return false;
  return this.i1e(value instanceof JsonElement ? value : THROW_CCE());
};
protoOf(JsonObject).ae = function (key) {
  return this.g1e_1.q2(key);
};
protoOf(JsonObject).q2 = function (key) {
  if (!(!(key == null) ? typeof key === 'string' : false))
    return null;
  return this.ae((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
};
protoOf(JsonObject).asJsReadonlyMapView = function () {
  return this.g1e_1.asJsReadonlyMapView();
};
protoOf(JsonObject).j = function () {
  return this.g1e_1.j();
};
protoOf(JsonObject).r2 = function () {
  return this.g1e_1.r2();
};
protoOf(JsonObject).s2 = function () {
  return this.g1e_1.s2();
};
protoOf(JsonObject).t2 = function () {
  return this.g1e_1.t2();
};
function JsonNull() {
  JsonNull_instance = this;
  JsonPrimitive.call(this);
  this.j1e_1 = 'null';
}
protoOf(JsonNull).k1e = function () {
  return false;
};
protoOf(JsonNull).l1e = function () {
  return this.j1e_1;
};
protoOf(JsonNull).m1e = function () {
  return JsonNullSerializer_getInstance();
};
protoOf(JsonNull).y12 = function (typeParamsSerializers) {
  return this.m1e();
};
var JsonNull_instance;
function JsonNull_getInstance() {
  if (JsonNull_instance == null)
    new JsonNull();
  return JsonNull_instance;
}
function Companion_1() {
}
var Companion_instance_1;
function Companion_getInstance_5() {
  return Companion_instance_1;
}
function JsonPrimitive() {
  JsonElement.call(this);
}
protoOf(JsonPrimitive).toString = function () {
  return this.l1e();
};
function JsonPrimitive_0(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, false);
}
function JsonPrimitive_1(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, false);
}
function JsonPrimitive_2(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  if (value == null)
    return JsonNull_getInstance();
  return new JsonLiteral(value, true);
}
function JsonLiteral(body, isString, coerceToInlineType) {
  coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
  JsonPrimitive.call(this);
  this.n1e_1 = isString;
  this.o1e_1 = coerceToInlineType;
  this.p1e_1 = toString(body);
  if (!(this.o1e_1 == null)) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!this.o1e_1.ls()) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
}
protoOf(JsonLiteral).k1e = function () {
  return this.n1e_1;
};
protoOf(JsonLiteral).l1e = function () {
  return this.p1e_1;
};
protoOf(JsonLiteral).toString = function () {
  var tmp;
  if (this.n1e_1) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, this.p1e_1);
    tmp = this_0.toString();
  } else {
    tmp = this.p1e_1;
  }
  return tmp;
};
protoOf(JsonLiteral).equals = function (other) {
  if (this === other)
    return true;
  if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
    return false;
  if (!(other instanceof JsonLiteral))
    THROW_CCE();
  if (!(this.n1e_1 === other.n1e_1))
    return false;
  if (!(this.p1e_1 === other.p1e_1))
    return false;
  return true;
};
protoOf(JsonLiteral).hashCode = function () {
  var result = getBooleanHashCode(this.n1e_1);
  result = imul(31, result) + getStringHashCode(this.p1e_1) | 0;
  return result;
};
function Companion_2() {
}
var Companion_instance_2;
function Companion_getInstance_6() {
  return Companion_instance_2;
}
function JsonArray(content) {
  JsonElement.call(this);
  this.q1e_1 = content;
}
protoOf(JsonArray).equals = function (other) {
  return equals(this.q1e_1, other);
};
protoOf(JsonArray).hashCode = function () {
  return hashCode(this.q1e_1);
};
protoOf(JsonArray).toString = function () {
  return joinToString(this.q1e_1, ',', '[', ']');
};
protoOf(JsonArray).q = function () {
  return this.q1e_1.q();
};
protoOf(JsonArray).r1e = function (element) {
  return this.q1e_1.p(element);
};
protoOf(JsonArray).p = function (element) {
  if (!(element instanceof JsonElement))
    return false;
  return this.r1e(element instanceof JsonElement ? element : THROW_CCE());
};
protoOf(JsonArray).g = function () {
  return this.q1e_1.g();
};
protoOf(JsonArray).s1e = function (elements) {
  return this.q1e_1.z1(elements);
};
protoOf(JsonArray).z1 = function (elements) {
  return this.s1e(elements);
};
protoOf(JsonArray).o = function (index) {
  return this.q1e_1.o(index);
};
protoOf(JsonArray).t1e = function (element) {
  return this.q1e_1.r(element);
};
protoOf(JsonArray).r = function (element) {
  if (!(element instanceof JsonElement))
    return -1;
  return this.t1e(element instanceof JsonElement ? element : THROW_CCE());
};
protoOf(JsonArray).u1e = function (element) {
  return this.q1e_1.a2(element);
};
protoOf(JsonArray).a2 = function (element) {
  if (!(element instanceof JsonElement))
    return -1;
  return this.u1e(element instanceof JsonElement ? element : THROW_CCE());
};
protoOf(JsonArray).b2 = function () {
  return this.q1e_1.b2();
};
protoOf(JsonArray).c2 = function (index) {
  return this.q1e_1.c2(index);
};
protoOf(JsonArray).d2 = function (fromIndex, toIndex) {
  return this.q1e_1.d2(fromIndex, toIndex);
};
protoOf(JsonArray).asJsReadonlyArrayView = function () {
  return this.q1e_1.asJsReadonlyArrayView();
};
protoOf(JsonArray).j = function () {
  return this.q1e_1.j();
};
function get_booleanOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toBooleanStrictOrNull_0(_this__u8e3s4.l1e());
}
function parseLongImpl(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return (new StringJsonLexer(_this__u8e3s4.l1e())).v1e();
}
function get_float(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlin.text.toFloat' call
  var this_0 = _this__u8e3s4.l1e();
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return toDouble(this_0);
}
function get_double(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  return toDouble(_this__u8e3s4.l1e());
}
function get_contentOrNull(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (_this__u8e3s4 instanceof JsonNull) {
    tmp = null;
  } else {
    tmp = _this__u8e3s4.l1e();
  }
  return tmp;
}
function get_jsonPrimitive(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    error(_this__u8e3s4, 'JsonPrimitive');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function error(_this__u8e3s4, element) {
  _init_properties_JsonElement_kt__7cbdc2();
  throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
}
function get_jsonObject(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    error(_this__u8e3s4, 'JsonObject');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function get_boolean(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.l1e());
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException_init_$Create$(_this__u8e3s4.toString() + ' does not represent a Boolean');
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function JsonUnquotedLiteral(value) {
  _init_properties_JsonElement_kt__7cbdc2();
  var tmp;
  if (value == null) {
    tmp = JsonNull_getInstance();
  } else if (value === JsonNull_getInstance().j1e_1) {
    throw new JsonEncodingException("Creating a literal unquoted value of 'null' is forbidden. If you want to create JSON null literal, use JsonNull object, otherwise, use JsonPrimitive");
  } else {
    tmp = new JsonLiteral(value, false, get_jsonUnquotedLiteralDescriptor());
  }
  return tmp;
}
function get_int(_this__u8e3s4) {
  _init_properties_JsonElement_kt__7cbdc2();
  // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
  var tmp;
  try {
    tmp = parseLongImpl(_this__u8e3s4);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof JsonDecodingException) {
      var e = $p;
      throw NumberFormatException_init_$Create$(e.message);
    } else {
      throw $p;
    }
  }
  var result = tmp;
  // Inline function 'kotlin.ranges.contains' call
  var this_0 = numberRangeToNumber(-2147483648, 2147483647);
  if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
    throw NumberFormatException_init_$Create$(_this__u8e3s4.l1e() + ' is not an Int');
  return result.c1();
}
var properties_initialized_JsonElement_kt_abxy8s;
function _init_properties_JsonElement_kt__7cbdc2() {
  if (!properties_initialized_JsonElement_kt_abxy8s) {
    properties_initialized_JsonElement_kt_abxy8s = true;
    jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
  }
}
function JsonObjectBuilder() {
  var tmp = this;
  // Inline function 'kotlin.collections.linkedMapOf' call
  tmp.w1e_1 = LinkedHashMap_init_$Create$();
}
protoOf(JsonObjectBuilder).x1e = function (key, element) {
  return this.w1e_1.u2(key, element);
};
protoOf(JsonObjectBuilder).m1d = function () {
  return new JsonObject(this.w1e_1);
};
function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
  $this$buildSerialDescriptor.qr('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
  $this$buildSerialDescriptor.qr('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
  $this$buildSerialDescriptor.qr('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
  $this$buildSerialDescriptor.qr('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
  $this$buildSerialDescriptor.qr('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
  return Unit_instance;
}
function JsonElementSerializer$descriptor$lambda$lambda() {
  return JsonPrimitiveSerializer_getInstance().y1e_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_0() {
  return JsonNullSerializer_getInstance().z1e_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_1() {
  return JsonLiteralSerializer_getInstance().a1f_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_2() {
  return JsonObjectSerializer_getInstance().b1f_1;
}
function JsonElementSerializer$descriptor$lambda$lambda_3() {
  return JsonArraySerializer_getInstance().c1f_1;
}
function JsonElementSerializer() {
  JsonElementSerializer_instance = this;
  var tmp = this;
  var tmp_0 = SEALED_getInstance();
  tmp.d1f_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
}
protoOf(JsonElementSerializer).fr = function () {
  return this.d1f_1;
};
protoOf(JsonElementSerializer).e1f = function (encoder, value) {
  verify(encoder);
  if (value instanceof JsonPrimitive) {
    encoder.yv(JsonPrimitiveSerializer_getInstance(), value);
  } else {
    if (value instanceof JsonObject) {
      encoder.yv(JsonObjectSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonArray) {
        encoder.yv(JsonArraySerializer_getInstance(), value);
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
};
protoOf(JsonElementSerializer).gr = function (encoder, value) {
  return this.e1f(encoder, value instanceof JsonElement ? value : THROW_CCE());
};
protoOf(JsonElementSerializer).hr = function (decoder) {
  var input = asJsonDecoder(decoder);
  return input.f1e();
};
var JsonElementSerializer_instance;
function JsonElementSerializer_getInstance() {
  if (JsonElementSerializer_instance == null)
    new JsonElementSerializer();
  return JsonElementSerializer_instance;
}
function JsonObjectDescriptor() {
  JsonObjectDescriptor_instance = this;
  this.f1f_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).fr();
  this.g1f_1 = 'kotlinx.serialization.json.JsonObject';
}
protoOf(JsonObjectDescriptor).js = function () {
  return this.g1f_1;
};
protoOf(JsonObjectDescriptor).os = function (index) {
  return this.f1f_1.os(index);
};
protoOf(JsonObjectDescriptor).ps = function (name) {
  return this.f1f_1.ps(name);
};
protoOf(JsonObjectDescriptor).qs = function (index) {
  return this.f1f_1.qs(index);
};
protoOf(JsonObjectDescriptor).rs = function (index) {
  return this.f1f_1.rs(index);
};
protoOf(JsonObjectDescriptor).ss = function (index) {
  return this.f1f_1.ss(index);
};
protoOf(JsonObjectDescriptor).ks = function () {
  return this.f1f_1.ks();
};
protoOf(JsonObjectDescriptor).fs = function () {
  return this.f1f_1.fs();
};
protoOf(JsonObjectDescriptor).ls = function () {
  return this.f1f_1.ls();
};
protoOf(JsonObjectDescriptor).ms = function () {
  return this.f1f_1.ms();
};
protoOf(JsonObjectDescriptor).ns = function () {
  return this.f1f_1.ns();
};
var JsonObjectDescriptor_instance;
function JsonObjectDescriptor_getInstance() {
  if (JsonObjectDescriptor_instance == null)
    new JsonObjectDescriptor();
  return JsonObjectDescriptor_instance;
}
function JsonObjectSerializer() {
  JsonObjectSerializer_instance = this;
  this.b1f_1 = JsonObjectDescriptor_getInstance();
}
protoOf(JsonObjectSerializer).fr = function () {
  return this.b1f_1;
};
protoOf(JsonObjectSerializer).h1f = function (encoder, value) {
  verify(encoder);
  MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).gr(encoder, value);
};
protoOf(JsonObjectSerializer).gr = function (encoder, value) {
  return this.h1f(encoder, value instanceof JsonObject ? value : THROW_CCE());
};
protoOf(JsonObjectSerializer).hr = function (decoder) {
  verify_0(decoder);
  return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).hr(decoder));
};
var JsonObjectSerializer_instance;
function JsonObjectSerializer_getInstance() {
  if (JsonObjectSerializer_instance == null)
    new JsonObjectSerializer();
  return JsonObjectSerializer_instance;
}
function JsonArrayDescriptor() {
  JsonArrayDescriptor_instance = this;
  this.i1f_1 = ListSerializer(JsonElementSerializer_getInstance()).fr();
  this.j1f_1 = 'kotlinx.serialization.json.JsonArray';
}
protoOf(JsonArrayDescriptor).js = function () {
  return this.j1f_1;
};
protoOf(JsonArrayDescriptor).os = function (index) {
  return this.i1f_1.os(index);
};
protoOf(JsonArrayDescriptor).ps = function (name) {
  return this.i1f_1.ps(name);
};
protoOf(JsonArrayDescriptor).qs = function (index) {
  return this.i1f_1.qs(index);
};
protoOf(JsonArrayDescriptor).rs = function (index) {
  return this.i1f_1.rs(index);
};
protoOf(JsonArrayDescriptor).ss = function (index) {
  return this.i1f_1.ss(index);
};
protoOf(JsonArrayDescriptor).ks = function () {
  return this.i1f_1.ks();
};
protoOf(JsonArrayDescriptor).fs = function () {
  return this.i1f_1.fs();
};
protoOf(JsonArrayDescriptor).ls = function () {
  return this.i1f_1.ls();
};
protoOf(JsonArrayDescriptor).ms = function () {
  return this.i1f_1.ms();
};
protoOf(JsonArrayDescriptor).ns = function () {
  return this.i1f_1.ns();
};
var JsonArrayDescriptor_instance;
function JsonArrayDescriptor_getInstance() {
  if (JsonArrayDescriptor_instance == null)
    new JsonArrayDescriptor();
  return JsonArrayDescriptor_instance;
}
function JsonArraySerializer() {
  JsonArraySerializer_instance = this;
  this.c1f_1 = JsonArrayDescriptor_getInstance();
}
protoOf(JsonArraySerializer).fr = function () {
  return this.c1f_1;
};
protoOf(JsonArraySerializer).k1f = function (encoder, value) {
  verify(encoder);
  ListSerializer(JsonElementSerializer_getInstance()).gr(encoder, value);
};
protoOf(JsonArraySerializer).gr = function (encoder, value) {
  return this.k1f(encoder, value instanceof JsonArray ? value : THROW_CCE());
};
protoOf(JsonArraySerializer).hr = function (decoder) {
  verify_0(decoder);
  return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).hr(decoder));
};
var JsonArraySerializer_instance;
function JsonArraySerializer_getInstance() {
  if (JsonArraySerializer_instance == null)
    new JsonArraySerializer();
  return JsonArraySerializer_instance;
}
function defer(deferred) {
  return new defer$1(deferred);
}
function JsonPrimitiveSerializer() {
  JsonPrimitiveSerializer_instance = this;
  this.y1e_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
}
protoOf(JsonPrimitiveSerializer).fr = function () {
  return this.y1e_1;
};
protoOf(JsonPrimitiveSerializer).l1f = function (encoder, value) {
  verify(encoder);
  var tmp;
  if (value instanceof JsonNull) {
    encoder.yv(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    tmp = Unit_instance;
  } else {
    var tmp_0 = JsonLiteralSerializer_getInstance();
    encoder.yv(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
    tmp = Unit_instance;
  }
  return tmp;
};
protoOf(JsonPrimitiveSerializer).gr = function (encoder, value) {
  return this.l1f(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
};
protoOf(JsonPrimitiveSerializer).hr = function (decoder) {
  var result = asJsonDecoder(decoder).f1e();
  if (!(result instanceof JsonPrimitive))
    throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result)), toString(result));
  return result;
};
var JsonPrimitiveSerializer_instance;
function JsonPrimitiveSerializer_getInstance() {
  if (JsonPrimitiveSerializer_instance == null)
    new JsonPrimitiveSerializer();
  return JsonPrimitiveSerializer_instance;
}
function JsonNullSerializer() {
  JsonNullSerializer_instance = this;
  this.z1e_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
}
protoOf(JsonNullSerializer).fr = function () {
  return this.z1e_1;
};
protoOf(JsonNullSerializer).m1f = function (encoder, value) {
  verify(encoder);
  encoder.bv();
};
protoOf(JsonNullSerializer).gr = function (encoder, value) {
  return this.m1f(encoder, value instanceof JsonNull ? value : THROW_CCE());
};
protoOf(JsonNullSerializer).hr = function (decoder) {
  verify_0(decoder);
  if (decoder.rt()) {
    throw new JsonDecodingException("Expected 'null' literal");
  }
  decoder.st();
  return JsonNull_getInstance();
};
var JsonNullSerializer_instance;
function JsonNullSerializer_getInstance() {
  if (JsonNullSerializer_instance == null)
    new JsonNullSerializer();
  return JsonNullSerializer_instance;
}
function JsonLiteralSerializer() {
  JsonLiteralSerializer_instance = this;
  this.a1f_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
}
protoOf(JsonLiteralSerializer).fr = function () {
  return this.a1f_1;
};
protoOf(JsonLiteralSerializer).n1f = function (encoder, value) {
  verify(encoder);
  if (value.n1e_1) {
    return encoder.kv(value.p1e_1);
  }
  if (!(value.o1e_1 == null)) {
    return encoder.mv(value.o1e_1).kv(value.p1e_1);
  }
  var tmp0_safe_receiver = toLongOrNull(value.p1e_1);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.gv(tmp0_safe_receiver);
  }
  var tmp1_safe_receiver = toULongOrNull(value.p1e_1);
  var tmp = tmp1_safe_receiver;
  if ((tmp == null ? null : new ULong(tmp)) == null)
    null;
  else {
    var tmp_0 = tmp1_safe_receiver;
    // Inline function 'kotlin.let' call
    var it = (tmp_0 == null ? null : new ULong(tmp_0)).m1_1;
    var tmp_1 = encoder.mv(serializer_0(Companion_getInstance()).fr());
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
    tmp_1.gv(tmp$ret$1);
    return Unit_instance;
  }
  var tmp2_safe_receiver = toDoubleOrNull(value.p1e_1);
  if (tmp2_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.iv(tmp2_safe_receiver);
  }
  var tmp3_safe_receiver = toBooleanStrictOrNull(value.p1e_1);
  if (tmp3_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return encoder.cv(tmp3_safe_receiver);
  }
  encoder.kv(value.p1e_1);
};
protoOf(JsonLiteralSerializer).gr = function (encoder, value) {
  return this.n1f(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
};
protoOf(JsonLiteralSerializer).hr = function (decoder) {
  var result = asJsonDecoder(decoder).f1e();
  if (!(result instanceof JsonLiteral))
    throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result)), toString(result));
  return result;
};
var JsonLiteralSerializer_instance;
function JsonLiteralSerializer_getInstance() {
  if (JsonLiteralSerializer_instance == null)
    new JsonLiteralSerializer();
  return JsonLiteralSerializer_instance;
}
function verify(encoder) {
  asJsonEncoder(encoder);
}
function asJsonDecoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function verify_0(decoder) {
  asJsonDecoder(decoder);
}
function asJsonEncoder(_this__u8e3s4) {
  var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function _get_original__l7ku1m($this) {
  var tmp0 = $this.o1f_1;
  var tmp = KProperty1;
  // Inline function 'kotlin.getValue' call
  getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
  return tmp0.n2();
}
function defer$o$_get_original_$ref_3cje7k() {
  return function (p0) {
    return _get_original__l7ku1m(p0);
  };
}
function defer$1($deferred) {
  this.o1f_1 = lazy($deferred);
}
protoOf(defer$1).js = function () {
  return _get_original__l7ku1m(this).js();
};
protoOf(defer$1).ks = function () {
  return _get_original__l7ku1m(this).ks();
};
protoOf(defer$1).ms = function () {
  return _get_original__l7ku1m(this).ms();
};
protoOf(defer$1).os = function (index) {
  return _get_original__l7ku1m(this).os(index);
};
protoOf(defer$1).ps = function (name) {
  return _get_original__l7ku1m(this).ps(name);
};
protoOf(defer$1).qs = function (index) {
  return _get_original__l7ku1m(this).qs(index);
};
protoOf(defer$1).rs = function (index) {
  return _get_original__l7ku1m(this).rs(index);
};
protoOf(defer$1).ss = function (index) {
  return _get_original__l7ku1m(this).ss(index);
};
function JsonEncoder() {
}
function Composer(writer) {
  this.p1f_1 = writer;
  this.q1f_1 = true;
}
protoOf(Composer).r1f = function () {
  this.q1f_1 = true;
};
protoOf(Composer).s1f = function () {
  return Unit_instance;
};
protoOf(Composer).t1f = function () {
  this.q1f_1 = false;
};
protoOf(Composer).u1f = function () {
  this.q1f_1 = false;
};
protoOf(Composer).v1f = function () {
  return Unit_instance;
};
protoOf(Composer).w1f = function (v) {
  return this.p1f_1.x1f(v);
};
protoOf(Composer).y1f = function (v) {
  return this.p1f_1.z1f(v);
};
protoOf(Composer).a1g = function (v) {
  return this.p1f_1.z1f(v.toString());
};
protoOf(Composer).b1g = function (v) {
  return this.p1f_1.z1f(v.toString());
};
protoOf(Composer).c1g = function (v) {
  return this.p1f_1.d1g(toLong(v));
};
protoOf(Composer).e1g = function (v) {
  return this.p1f_1.d1g(toLong(v));
};
protoOf(Composer).f1g = function (v) {
  return this.p1f_1.d1g(toLong(v));
};
protoOf(Composer).g1g = function (v) {
  return this.p1f_1.d1g(v);
};
protoOf(Composer).h1g = function (v) {
  return this.p1f_1.z1f(v.toString());
};
protoOf(Composer).i1g = function (value) {
  return this.p1f_1.j1g(value);
};
function Composer_0(sb, json) {
  return json.b1c_1.r1d_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
}
function ComposerForUnsignedNumbers(writer, forceQuoting) {
  Composer.call(this, writer);
  this.m1g_1 = forceQuoting;
}
protoOf(ComposerForUnsignedNumbers).f1g = function (v) {
  if (this.m1g_1) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
    this.i1g(UInt__toString_impl_dbgl21(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
    this.y1f(UInt__toString_impl_dbgl21(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).g1g = function (v) {
  if (this.m1g_1) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
    this.i1g(ULong__toString_impl_f9au7k(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
    this.y1f(ULong__toString_impl_f9au7k(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).c1g = function (v) {
  if (this.m1g_1) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
    this.i1g(UByte__toString_impl_v72jg(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
    this.y1f(UByte__toString_impl_v72jg(tmp$ret$1));
  }
};
protoOf(ComposerForUnsignedNumbers).e1g = function (v) {
  if (this.m1g_1) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(v);
    this.i1g(UShort__toString_impl_edaoee(tmp$ret$0));
  } else {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$1 = _UShort___init__impl__jigrne(v);
    this.y1f(UShort__toString_impl_edaoee(tmp$ret$1));
  }
};
function ComposerForUnquotedLiterals(writer, forceQuoting) {
  Composer.call(this, writer);
  this.p1g_1 = forceQuoting;
}
protoOf(ComposerForUnquotedLiterals).i1g = function (value) {
  if (this.p1g_1) {
    protoOf(Composer).i1g.call(this, value);
  } else {
    protoOf(Composer).y1f.call(this, value);
  }
};
function ComposerWithPrettyPrint(writer, json) {
  Composer.call(this, writer);
  this.s1g_1 = json;
  this.t1g_1 = 0;
}
protoOf(ComposerWithPrettyPrint).r1f = function () {
  this.q1f_1 = true;
  this.t1g_1 = this.t1g_1 + 1 | 0;
};
protoOf(ComposerWithPrettyPrint).s1f = function () {
  this.t1g_1 = this.t1g_1 - 1 | 0;
};
protoOf(ComposerWithPrettyPrint).t1f = function () {
  this.q1f_1 = false;
  this.y1f('\n');
  // Inline function 'kotlin.repeat' call
  var times = this.t1g_1;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      this.y1f(this.s1g_1.b1c_1.t1d_1);
    }
     while (inductionVariable < times);
};
protoOf(ComposerWithPrettyPrint).u1f = function () {
  if (this.q1f_1)
    this.q1f_1 = false;
  else {
    this.t1f();
  }
};
protoOf(ComposerWithPrettyPrint).v1f = function () {
  this.w1f(_Char___init__impl__6a9atx(32));
};
function readIfAbsent($this, descriptor, index) {
  $this.v1g_1 = (!descriptor.ss(index) && descriptor.rs(index).fs());
  return $this.v1g_1;
}
function JsonElementMarker$readIfAbsent$ref(p0) {
  var l = function (_this__u8e3s4, p0_0) {
    var tmp0 = p0;
    return readIfAbsent(tmp0, _this__u8e3s4, p0_0);
  };
  l.callableName = 'readIfAbsent';
  return l;
}
function JsonElementMarker(descriptor) {
  var tmp = this;
  tmp.u1g_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
  this.v1g_1 = false;
}
protoOf(JsonElementMarker).w1g = function (index) {
  this.u1g_1.o10(index);
};
protoOf(JsonElementMarker).x1g = function () {
  return this.u1g_1.p10();
};
function invalidTrailingComma(_this__u8e3s4, entity) {
  entity = entity === VOID ? 'object' : entity;
  _this__u8e3s4.y1g('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.p1c_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
}
function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
  _this__u8e3s4.z1g('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
}
function JsonEncodingException(message) {
  JsonException.call(this, message);
  captureStack(this, JsonEncodingException);
}
function InvalidKeyKindException(keyDescriptor) {
  return new JsonEncodingException("Value of type '" + keyDescriptor.js() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.ks().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
}
function InvalidFloatingPointEncoded(value, key, output) {
  return new JsonEncodingException(unexpectedFpErrorMessage(value, key, output));
}
function JsonDecodingException(message) {
  JsonException.call(this, message);
  captureStack(this, JsonDecodingException);
}
function JsonDecodingException_0(offset, message, input) {
  return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
}
function InvalidFloatingPointDecoded(value, key, output) {
  return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
}
function JsonDecodingException_1(offset, message) {
  return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
}
function minify(_this__u8e3s4, offset) {
  offset = offset === VOID ? -1 : offset;
  if (charSequenceLength(_this__u8e3s4) < 200)
    return _this__u8e3s4;
  if (offset === -1) {
    var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
    if (start <= 0)
      return _this__u8e3s4;
    // Inline function 'kotlin.text.substring' call
    var endIndex = charSequenceLength(_this__u8e3s4);
    return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
  }
  var start_0 = offset - 30 | 0;
  var end = offset + 30 | 0;
  var prefix = start_0 <= 0 ? '' : '.....';
  var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
  var tmp2 = coerceAtLeast(start_0, 0);
  // Inline function 'kotlin.text.substring' call
  var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
  return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
}
function InvalidFloatingPointEncoded_0(value, output) {
  return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
}
function JsonException(message) {
  SerializationException_init_$Init$(message, this);
  captureStack(this, JsonException);
}
function unexpectedFpErrorMessage(value, key, output) {
  return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + "non-finite floating point values are prohibited because they do not conform JSON specification. It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
}
function get_JsonDeserializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonDeserializationNamesKey;
}
var JsonDeserializationNamesKey;
function get_JsonSerializationNamesKey() {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return JsonSerializationNamesKey;
}
var JsonSerializationNamesKey;
function ignoreUnknownKeys(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp;
  if (json.b1c_1.o1d_1) {
    tmp = true;
  } else {
    var tmp0 = _this__u8e3s4.ns();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.q();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        if (element instanceof JsonIgnoreUnknownKeys) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    tmp = tmp$ret$0;
  }
  return tmp;
}
function getJsonNameIndex(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  if (decodeCaseInsensitive(json, _this__u8e3s4)) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = name.toLowerCase();
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
  }
  var strategy = namingStrategy(_this__u8e3s4, json);
  if (!(strategy == null))
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  var index = _this__u8e3s4.ps(name);
  if (!(index === -3))
    return index;
  if (!json.b1c_1.y1d_1)
    return index;
  return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
}
function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
  suffix = suffix === VOID ? '' : suffix;
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var index = getJsonNameIndex(_this__u8e3s4, json, name);
  if (index === -3)
    throw SerializationException_init_$Create$(_this__u8e3s4.js() + " does not contain element with name '" + name + "'" + suffix);
  return index;
}
function getJsonElementName(_this__u8e3s4, json, index) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var strategy = namingStrategy(_this__u8e3s4, json);
  return strategy == null ? _this__u8e3s4.os(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
}
function namingStrategy(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return equals(_this__u8e3s4.ks(), CLASS_getInstance()) ? json.b1c_1.z1d_1 : null;
}
function deserializationNamesMap(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(_this__u8e3s4);
  var tmp_0 = get_JsonDeserializationNamesKey();
  return tmp.b1h(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
}
function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  return _this__u8e3s4.b1c_1.a1e_1 && equals(descriptor.ks(), ENUM_getInstance());
}
function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).q2(name);
  return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
}
function serializationNamesIndices(_this__u8e3s4, json, strategy) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  var tmp = get_schemaCache(json);
  var tmp_0 = get_JsonSerializationNamesKey();
  return tmp.b1h(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
}
function buildDeserializationNamesMap(_this__u8e3s4, json) {
  _init_properties_JsonNamesMap_kt__cbbp0k();
  // Inline function 'kotlin.collections.mutableMapOf' call
  var builder = LinkedHashMap_init_$Create$();
  var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
  var strategyForClasses = namingStrategy(_this__u8e3s4, json);
  var inductionVariable = 0;
  var last = _this__u8e3s4.ms();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = _this__u8e3s4.qs(i);
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        if (element instanceof JsonNames) {
          destination.e(element);
        }
      }
      var tmp0_safe_receiver = singleOrNull(destination);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1h_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable_0 = 0;
        var last_0 = tmp1_safe_receiver.length;
        while (inductionVariable_0 < last_0) {
          var element_0 = tmp1_safe_receiver[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp;
          if (useLowercaseEnums) {
            // Inline function 'kotlin.text.lowercase' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp = element_0.toLowerCase();
          } else {
            tmp = element_0;
          }
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
        }
      }
      var tmp_0;
      if (useLowercaseEnums) {
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = _this__u8e3s4.os(i).toLowerCase();
      } else if (!(strategyForClasses == null)) {
        tmp_0 = strategyForClasses.d1h(_this__u8e3s4, i, _this__u8e3s4.os(i));
      } else {
        tmp_0 = null;
      }
      var nameToPut = tmp_0;
      if (nameToPut == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
      }
    }
     while (inductionVariable < last);
  // Inline function 'kotlin.collections.ifEmpty' call
  var tmp_1;
  if (builder.q()) {
    tmp_1 = emptyMap();
  } else {
    tmp_1 = builder;
  }
  return tmp_1;
}
function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
  var entity = equals($this_buildDeserializationNamesMap.ks(), ENUM_getInstance()) ? 'enum value' : 'property';
  // Inline function 'kotlin.collections.contains' call
  // Inline function 'kotlin.collections.containsKey' call
  if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).o2(name)) {
    throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.os(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.os(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
  }
  // Inline function 'kotlin.collections.set' call
  _this__u8e3s4.u2(name, index);
}
function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
  return function () {
    return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
  };
}
function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
  return function () {
    var tmp = 0;
    var tmp_0 = $this_serializationNamesIndices.ms();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var baseName = $this_serializationNamesIndices.os(tmp_2);
      tmp_1[tmp_2] = $strategy.d1h($this_serializationNamesIndices, tmp_2, baseName);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
}
var properties_initialized_JsonNamesMap_kt_ljpf42;
function _init_properties_JsonNamesMap_kt__cbbp0k() {
  if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
    properties_initialized_JsonNamesMap_kt_ljpf42 = true;
    JsonDeserializationNamesKey = new Key();
    JsonSerializationNamesKey = new Key();
  }
}
function Tombstone() {
}
var Tombstone_instance;
function Tombstone_getInstance() {
  return Tombstone_instance;
}
function resize($this) {
  var newSize = imul($this.g1h_1, 2);
  $this.e1h_1 = copyOf($this.e1h_1, newSize);
  var tmp = 0;
  var tmp_0 = new Int32Array(newSize);
  while (tmp < newSize) {
    tmp_0[tmp] = -1;
    tmp = tmp + 1 | 0;
  }
  var newIndices = tmp_0;
  // Inline function 'kotlin.collections.copyInto' call
  var this_0 = $this.f1h_1;
  var endIndex = this_0.length;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_1 = this_0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
  $this.f1h_1 = newIndices;
}
function JsonPath() {
  var tmp = this;
  // Inline function 'kotlin.arrayOfNulls' call
  tmp.e1h_1 = Array(8);
  var tmp_0 = this;
  var tmp_1 = 0;
  var tmp_2 = new Int32Array(8);
  while (tmp_1 < 8) {
    tmp_2[tmp_1] = -1;
    tmp_1 = tmp_1 + 1 | 0;
  }
  tmp_0.f1h_1 = tmp_2;
  this.g1h_1 = -1;
}
protoOf(JsonPath).h1h = function (sd) {
  this.g1h_1 = this.g1h_1 + 1 | 0;
  var depth = this.g1h_1;
  if (depth === this.e1h_1.length) {
    resize(this);
  }
  this.e1h_1[depth] = sd;
};
protoOf(JsonPath).i1h = function (index) {
  this.f1h_1[this.g1h_1] = index;
};
protoOf(JsonPath).j1h = function (key) {
  var tmp;
  if (!(this.f1h_1[this.g1h_1] === -2)) {
    this.g1h_1 = this.g1h_1 + 1 | 0;
    tmp = this.g1h_1 === this.e1h_1.length;
  } else {
    tmp = false;
  }
  if (tmp) {
    resize(this);
  }
  this.e1h_1[this.g1h_1] = key;
  this.f1h_1[this.g1h_1] = -2;
};
protoOf(JsonPath).k1h = function () {
  if (this.f1h_1[this.g1h_1] === -2) {
    this.e1h_1[this.g1h_1] = Tombstone_instance;
  }
};
protoOf(JsonPath).l1h = function () {
  var depth = this.g1h_1;
  if (this.f1h_1[depth] === -2) {
    this.f1h_1[depth] = -1;
    this.g1h_1 = this.g1h_1 - 1 | 0;
  }
  if (!(this.g1h_1 === -1)) {
    this.g1h_1 = this.g1h_1 - 1 | 0;
  }
};
protoOf(JsonPath).m1h = function () {
  // Inline function 'kotlin.text.buildString' call
  // Inline function 'kotlin.apply' call
  var this_0 = StringBuilder_init_$Create$();
  this_0.j9('$');
  // Inline function 'kotlin.repeat' call
  var times = this.g1h_1 + 1 | 0;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var element = this.e1h_1[index];
      if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
        if (equals(element.ks(), LIST_getInstance())) {
          if (!(this.f1h_1[index] === -1)) {
            this_0.j9('[');
            this_0.xc(this.f1h_1[index]);
            this_0.j9(']');
          }
        } else {
          var idx = this.f1h_1[index];
          if (idx >= 0) {
            this_0.j9('.');
            this_0.j9(element.os(idx));
          }
        }
      } else {
        if (!(element === Tombstone_instance)) {
          this_0.j9('[');
          this_0.j9("'");
          this_0.i9(element);
          this_0.j9("'");
          this_0.j9(']');
        }
      }
    }
     while (inductionVariable < times);
  return this_0.toString();
};
protoOf(JsonPath).toString = function () {
  return this.m1h();
};
function checkKind($this, descriptor, actualClass) {
  var kind = descriptor.ks();
  var tmp;
  if (kind instanceof PolymorphicKind) {
    tmp = true;
  } else {
    tmp = equals(kind, CONTEXTUAL_getInstance());
  }
  if (tmp) {
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.lb() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
  }
  if ($this.o1h_1)
    return Unit_instance;
  if (!$this.p1h_1)
    return Unit_instance;
  var tmp_0;
  var tmp_1;
  if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
    tmp_1 = true;
  } else {
    tmp_1 = kind instanceof PrimitiveKind;
  }
  if (tmp_1) {
    tmp_0 = true;
  } else {
    tmp_0 = kind instanceof ENUM;
  }
  if (tmp_0) {
    throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.lb() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
  }
}
function checkDiscriminatorCollisions($this, descriptor, actualClass) {
  var inductionVariable = 0;
  var last = descriptor.ms();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var name = descriptor.os(i);
      if (name === $this.n1h_1) {
        throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism');
      }
    }
     while (inductionVariable < last);
}
function JsonSerializersModuleValidator(configuration) {
  this.n1h_1 = configuration.w1d_1;
  this.o1h_1 = configuration.v1d_1;
  this.p1h_1 = !configuration.d1e_1.equals(ClassDiscriminatorMode_NONE_getInstance());
}
protoOf(JsonSerializersModuleValidator).s1b = function (kClass, provider) {
};
protoOf(JsonSerializersModuleValidator).v1b = function (baseClass, actualClass, actualSerializer) {
  var descriptor = actualSerializer.fr();
  checkKind(this, descriptor, actualClass);
  if (!this.o1h_1 && this.p1h_1) {
    checkDiscriminatorCollisions(this, descriptor, actualClass);
  }
};
protoOf(JsonSerializersModuleValidator).w1b = function (baseClass, defaultSerializerProvider) {
};
protoOf(JsonSerializersModuleValidator).x1b = function (baseClass, defaultDeserializerProvider) {
};
function encodeByWriter(json, writer, serializer, value) {
  var tmp = WriteMode_OBJ_getInstance();
  // Inline function 'kotlin.arrayOfNulls' call
  var size = get_entries().j();
  var tmp$ret$0 = Array(size);
  var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
  encoder.yv(serializer, value);
}
function Companion_3() {
}
var Companion_instance_3;
function Companion_getInstance_7() {
  return Companion_instance_3;
}
function readObject($this) {
  // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
  var lastToken = $this.z1h_1.d1i(6);
  if ($this.z1h_1.e1i() === 4) {
    $this.z1h_1.z1g('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.linkedMapOf' call
  var result = LinkedHashMap_init_$Create$();
  $l$loop: while ($this.z1h_1.f1i()) {
    var key = $this.a1i_1 ? $this.z1h_1.h1i() : $this.z1h_1.g1i();
    $this.z1h_1.d1i(5);
    var element = $this.i1i();
    // Inline function 'kotlin.collections.set' call
    result.u2(key, element);
    lastToken = $this.z1h_1.j1i();
    var tmp0_subject = lastToken;
    if (tmp0_subject !== 4)
      if (tmp0_subject === 7)
        break $l$loop;
      else {
        $this.z1h_1.z1g('Expected end of the object or comma');
      }
  }
  if (lastToken === 6) {
    $this.z1h_1.d1i(7);
  } else if (lastToken === 4) {
    if (!$this.b1i_1) {
      invalidTrailingComma($this.z1h_1);
    }
    $this.z1h_1.d1i(7);
  }
  return new JsonObject(result);
}
function readObject_0($this, _this__u8e3s4, $completion) {
  var tmp = new $readObjectCOROUTINE$($this, _this__u8e3s4, $completion);
  tmp.aa_1 = Unit_instance;
  tmp.ba_1 = null;
  return tmp.ga();
}
function readArray($this) {
  var lastToken = $this.z1h_1.j1i();
  if ($this.z1h_1.e1i() === 4) {
    $this.z1h_1.z1g('Unexpected leading comma');
  }
  // Inline function 'kotlin.collections.arrayListOf' call
  var result = ArrayList_init_$Create$();
  while ($this.z1h_1.f1i()) {
    var element = $this.i1i();
    result.e(element);
    lastToken = $this.z1h_1.j1i();
    if (!(lastToken === 4)) {
      var tmp0 = $this.z1h_1;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
      var condition = lastToken === 9;
      var position = tmp0.p1c_1;
      if (!condition) {
        var tmp$ret$1 = 'Expected end of the array or comma';
        tmp0.z1g(tmp$ret$1, position);
      }
    }
  }
  if (lastToken === 8) {
    $this.z1h_1.d1i(9);
  } else if (lastToken === 4) {
    if (!$this.b1i_1) {
      invalidTrailingComma($this.z1h_1, 'array');
    }
    $this.z1h_1.d1i(9);
  }
  return new JsonArray(result);
}
function readValue($this, isString) {
  var tmp;
  if ($this.a1i_1 || !isString) {
    tmp = $this.z1h_1.h1i();
  } else {
    tmp = $this.z1h_1.g1i();
  }
  var string = tmp;
  if (!isString && string === 'null')
    return JsonNull_getInstance();
  return new JsonLiteral(string, isString);
}
function readDeepRecursive($this) {
  return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
}
function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
  this.h1j_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(JsonTreeReader$readDeepRecursive$slambda).m1j = function ($this$DeepRecursiveFunction, it, $completion) {
  var tmp = this.n1j($this$DeepRecursiveFunction, it, $completion);
  tmp.aa_1 = Unit_instance;
  tmp.ba_1 = null;
  return tmp.ga();
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).ma = function (p1, p2, $completion) {
  var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
  return this.m1j(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).ga = function () {
  var suspendResult = this.aa_1;
  $sm: do
    try {
      var tmp = this.y9_1;
      switch (tmp) {
        case 0:
          this.z9_1 = 3;
          this.k1j_1 = this.h1j_1.z1h_1.e1i();
          if (this.k1j_1 === 1) {
            this.l1j_1 = readValue(this.h1j_1, true);
            this.y9_1 = 2;
            continue $sm;
          } else {
            if (this.k1j_1 === 0) {
              this.l1j_1 = readValue(this.h1j_1, false);
              this.y9_1 = 2;
              continue $sm;
            } else {
              if (this.k1j_1 === 6) {
                this.y9_1 = 1;
                suspendResult = readObject_0(this.h1j_1, this.i1j_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.k1j_1 === 8) {
                  this.l1j_1 = readArray(this.h1j_1);
                  this.y9_1 = 2;
                  continue $sm;
                } else {
                  var tmp_0 = this;
                  this.h1j_1.z1h_1.z1g("Can't begin reading element, unexpected token");
                }
              }
            }
          }

          break;
        case 1:
          this.l1j_1 = suspendResult;
          this.y9_1 = 2;
          continue $sm;
        case 2:
          return this.l1j_1;
        case 3:
          throw this.ba_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.z9_1 === 3) {
        throw e;
      } else {
        this.y9_1 = this.z9_1;
        this.ba_1 = e;
      }
    }
   while (true);
};
protoOf(JsonTreeReader$readDeepRecursive$slambda).n1j = function ($this$DeepRecursiveFunction, it, completion) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this.h1j_1, completion);
  i.i1j_1 = $this$DeepRecursiveFunction;
  i.j1j_1 = it;
  return i;
};
function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
  var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
  var l = function ($this$DeepRecursiveFunction, it, $completion) {
    return i.m1j($this$DeepRecursiveFunction, it, $completion);
  };
  l.$arity = 2;
  return l;
}
function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.s1i_1 = _this__u8e3s4;
  this.t1i_1 = _this__u8e3s4_0;
}
protoOf($readObjectCOROUTINE$).ga = function () {
  var suspendResult = this.aa_1;
  $sm: do
    try {
      var tmp = this.y9_1;
      switch (tmp) {
        case 0:
          this.z9_1 = 5;
          var tmp_0 = this;
          tmp_0.u1i_1 = this.s1i_1;
          this.v1i_1 = this.u1i_1;
          this.w1i_1 = this.v1i_1.z1h_1.d1i(6);
          if (this.v1i_1.z1h_1.e1i() === 4) {
            this.v1i_1.z1h_1.z1g('Unexpected leading comma');
          }

          var tmp_1 = this;
          tmp_1.x1i_1 = LinkedHashMap_init_$Create$();
          this.y9_1 = 1;
          continue $sm;
        case 1:
          if (!this.v1i_1.z1h_1.f1i()) {
            this.y9_1 = 4;
            continue $sm;
          }

          this.y1i_1 = this.v1i_1.a1i_1 ? this.v1i_1.z1h_1.h1i() : this.v1i_1.z1h_1.g1i();
          this.v1i_1.z1h_1.d1i(5);
          this.y9_1 = 2;
          suspendResult = this.t1i_1.nl(Unit_instance, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var element = suspendResult;
          var tmp0 = this.x1i_1;
          var key = this.y1i_1;
          tmp0.u2(key, element);
          this.w1i_1 = this.v1i_1.z1h_1.j1i();
          var tmp0_subject = this.w1i_1;
          if (tmp0_subject === 4) {
            this.y9_1 = 3;
            continue $sm;
          } else {
            if (tmp0_subject === 7) {
              this.y9_1 = 4;
              continue $sm;
            } else {
              this.v1i_1.z1h_1.z1g('Expected end of the object or comma');
            }
          }

          break;
        case 3:
          this.y9_1 = 1;
          continue $sm;
        case 4:
          if (this.w1i_1 === 6) {
            this.v1i_1.z1h_1.d1i(7);
          } else if (this.w1i_1 === 4) {
            if (!this.v1i_1.b1i_1) {
              invalidTrailingComma(this.v1i_1.z1h_1);
            }
            this.v1i_1.z1h_1.d1i(7);
          }

          return new JsonObject(this.x1i_1);
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
function JsonTreeReader(configuration, lexer) {
  this.z1h_1 = lexer;
  this.a1i_1 = configuration.p1d_1;
  this.b1i_1 = configuration.b1e_1;
  this.c1i_1 = 0;
}
protoOf(JsonTreeReader).i1i = function () {
  var token = this.z1h_1.e1i();
  var tmp;
  if (token === 1) {
    tmp = readValue(this, true);
  } else if (token === 0) {
    tmp = readValue(this, false);
  } else if (token === 6) {
    var tmp_0;
    this.c1i_1 = this.c1i_1 + 1 | 0;
    if (this.c1i_1 === 200) {
      tmp_0 = readDeepRecursive(this);
    } else {
      tmp_0 = readObject(this);
    }
    var result = tmp_0;
    this.c1i_1 = this.c1i_1 - 1 | 0;
    tmp = result;
  } else if (token === 8) {
    tmp = readArray(this);
  } else {
    this.z1h_1.z1g('Cannot read Json element because of unexpected ' + tokenDescription(token));
  }
  return tmp;
};
function classDiscriminator(_this__u8e3s4, json) {
  var _iterator__ex2g4s = _this__u8e3s4.ns().g();
  while (_iterator__ex2g4s.h()) {
    var annotation = _iterator__ex2g4s.i();
    if (annotation instanceof JsonClassDiscriminator)
      return annotation.o1j_1;
  }
  return json.b1c_1.w1d_1;
}
function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
  if (!(serializer instanceof SealedClassSerializer))
    return Unit_instance;
  if (jsonCachedSerialNames(actualSerializer.fr()).p(classDiscriminator)) {
    var baseName = serializer.fr().js();
    var actualName = actualSerializer.fr().js();
    // Inline function 'kotlin.error' call
    var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism';
    throw IllegalStateException_init_$Create$(toString(message));
  }
}
function checkKind_0(kind) {
  if (kind instanceof ENUM) {
    // Inline function 'kotlin.error' call
    var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if (kind instanceof PrimitiveKind) {
    // Inline function 'kotlin.error' call
    var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
    throw IllegalStateException_init_$Create$(toString(message_0));
  }
  if (kind instanceof PolymorphicKind) {
    // Inline function 'kotlin.error' call
    var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
    throw IllegalStateException_init_$Create$(toString(message_1));
  }
}
function access$validateIfSealed$tPolymorphicKt(serializer, actualSerializer, classDiscriminator) {
  return validateIfSealed(serializer, actualSerializer, classDiscriminator);
}
function Key() {
}
function DescriptorSchemaCache() {
  this.a1h_1 = createMapForCache(16);
}
protoOf(DescriptorSchemaCache).p1j = function (descriptor, key, value) {
  // Inline function 'kotlin.collections.getOrPut' call
  var this_0 = this.a1h_1;
  var value_0 = this_0.q2(descriptor);
  var tmp;
  if (value_0 == null) {
    var answer = createMapForCache(2);
    this_0.u2(descriptor, answer);
    tmp = answer;
  } else {
    tmp = value_0;
  }
  var tmp0 = tmp;
  var tmp2 = key instanceof Key ? key : THROW_CCE();
  // Inline function 'kotlin.collections.set' call
  var value_1 = !(value == null) ? value : THROW_CCE();
  tmp0.u2(tmp2, value_1);
};
protoOf(DescriptorSchemaCache).b1h = function (descriptor, key, defaultValue) {
  var tmp0_safe_receiver = this.q1j(descriptor, key);
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var value = defaultValue();
  this.p1j(descriptor, key, value);
  return value;
};
protoOf(DescriptorSchemaCache).q1j = function (descriptor, key) {
  var tmp0_safe_receiver = this.a1h_1.q2(descriptor);
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    tmp = tmp0_safe_receiver.q2(key instanceof Key ? key : THROW_CCE());
  }
  var tmp_0 = tmp;
  return !(tmp_0 == null) ? tmp_0 : null;
};
function DiscriminatorHolder(discriminatorToSkip) {
  this.r1j_1 = discriminatorToSkip;
}
function trySkip($this, _this__u8e3s4, unknownKey) {
  if (_this__u8e3s4 == null)
    return false;
  if (_this__u8e3s4.r1j_1 === unknownKey) {
    _this__u8e3s4.r1j_1 = null;
    return true;
  }
  return false;
}
function skipLeftoverElements($this, descriptor) {
  while (!($this.xu(descriptor) === -1)) {
  }
}
function checkLeadingComma($this) {
  if ($this.j1c_1.e1i() === 4) {
    $this.j1c_1.z1g('Unexpected leading comma');
  }
}
function decodeMapIndex($this) {
  var hasComma = false;
  var decodingKey = !(($this.l1c_1 % 2 | 0) === 0);
  if (decodingKey) {
    if (!($this.l1c_1 === -1)) {
      hasComma = $this.j1c_1.t1j();
    }
  } else {
    $this.j1c_1.s1j(_Char___init__impl__6a9atx(58));
  }
  var tmp;
  if ($this.j1c_1.f1i()) {
    if (decodingKey) {
      if ($this.l1c_1 === -1) {
        var tmp0 = $this.j1c_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = !hasComma;
        var position = tmp0.p1c_1;
        if (!condition) {
          var tmp$ret$0 = 'Unexpected leading comma';
          tmp0.z1g(tmp$ret$0, position);
        }
      } else {
        var tmp0_0 = $this.j1c_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition_0 = hasComma;
        var position_0 = tmp0_0.p1c_1;
        if (!condition_0) {
          var tmp$ret$2 = 'Expected comma after the key-value pair';
          tmp0_0.z1g(tmp$ret$2, position_0);
        }
      }
    }
    $this.l1c_1 = $this.l1c_1 + 1 | 0;
    tmp = $this.l1c_1;
  } else {
    if (hasComma && !$this.h1c_1.b1c_1.b1e_1) {
      invalidTrailingComma($this.j1c_1);
    }
    tmp = -1;
  }
  return tmp;
}
function coerceInputValue($this, descriptor, index) {
  var tmp0 = $this.h1c_1;
  var tmp$ret$1;
  $l$block_2: {
    // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
    var isOptional = descriptor.ss(index);
    var elementDescriptor = descriptor.rs(index);
    var tmp;
    if (isOptional && !elementDescriptor.fs()) {
      tmp = $this.j1c_1.u1j(true);
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$1 = true;
      break $l$block_2;
    }
    if (equals(elementDescriptor.ks(), ENUM_getInstance())) {
      var tmp_0;
      if (elementDescriptor.fs()) {
        tmp_0 = $this.j1c_1.u1j(false);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$1 = false;
        break $l$block_2;
      }
      var tmp0_elvis_lhs = $this.j1c_1.v1j($this.n1c_1.p1d_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = false;
        break $l$block_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var enumValue = tmp_1;
      var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
      var coerceToNull = !tmp0.b1c_1.s1d_1 && elementDescriptor.fs();
      if (enumIndex === -3 && (isOptional || coerceToNull)) {
        $this.j1c_1.g1i();
        tmp$ret$1 = true;
        break $l$block_2;
      }
    }
    tmp$ret$1 = false;
  }
  return tmp$ret$1;
}
function decodeObjectIndex($this, descriptor) {
  var hasComma = $this.j1c_1.t1j();
  while ($this.j1c_1.f1i()) {
    hasComma = false;
    var key = decodeStringKey($this);
    $this.j1c_1.s1j(_Char___init__impl__6a9atx(58));
    var index = getJsonNameIndex(descriptor, $this.h1c_1, key);
    var tmp;
    if (!(index === -3)) {
      var tmp_0;
      if ($this.n1c_1.u1d_1 && coerceInputValue($this, descriptor, index)) {
        hasComma = $this.j1c_1.t1j();
        tmp_0 = false;
      } else {
        var tmp0_safe_receiver = $this.o1c_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.w1g(index);
        }
        return index;
      }
      tmp = tmp_0;
    } else {
      tmp = true;
    }
    var isUnknown = tmp;
    if (isUnknown) {
      hasComma = handleUnknown($this, descriptor, key);
    }
  }
  if (hasComma && !$this.h1c_1.b1c_1.b1e_1) {
    invalidTrailingComma($this.j1c_1);
  }
  var tmp1_safe_receiver = $this.o1c_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x1g();
  return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
}
function handleUnknown($this, descriptor, key) {
  if (ignoreUnknownKeys(descriptor, $this.h1c_1) || trySkip($this, $this.m1c_1, key)) {
    $this.j1c_1.x1j($this.n1c_1.p1d_1);
  } else {
    $this.j1c_1.q1c_1.l1h();
    $this.j1c_1.w1j(key);
  }
  return $this.j1c_1.t1j();
}
function decodeListIndex($this) {
  var hasComma = $this.j1c_1.t1j();
  var tmp;
  if ($this.j1c_1.f1i()) {
    if (!($this.l1c_1 === -1) && !hasComma) {
      $this.j1c_1.z1g('Expected end of the array or comma');
    }
    $this.l1c_1 = $this.l1c_1 + 1 | 0;
    tmp = $this.l1c_1;
  } else {
    if (hasComma && !$this.h1c_1.b1c_1.b1e_1) {
      invalidTrailingComma($this.j1c_1, 'array');
    }
    tmp = -1;
  }
  return tmp;
}
function decodeStringKey($this) {
  var tmp;
  if ($this.n1c_1.p1d_1) {
    tmp = $this.j1c_1.z1j();
  } else {
    tmp = $this.j1c_1.y1j();
  }
  return tmp;
}
function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
  AbstractDecoder.call(this);
  this.h1c_1 = json;
  this.i1c_1 = mode;
  this.j1c_1 = lexer;
  this.k1c_1 = this.h1c_1.vu();
  this.l1c_1 = -1;
  this.m1c_1 = discriminatorHolder;
  this.n1c_1 = this.h1c_1.b1c_1;
  this.o1c_1 = this.n1c_1.s1d_1 ? null : new JsonElementMarker(descriptor);
}
protoOf(StreamingJsonDecoder).e1e = function () {
  return this.h1c_1;
};
protoOf(StreamingJsonDecoder).vu = function () {
  return this.k1c_1;
};
protoOf(StreamingJsonDecoder).f1e = function () {
  return (new JsonTreeReader(this.h1c_1.b1c_1, this.j1c_1)).i1i();
};
protoOf(StreamingJsonDecoder).fu = function (deserializer) {
  try {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.h1c_1.b1c_1.v1d_1;
    }
    if (tmp) {
      return deserializer.hr(this);
    }
    var discriminator = classDiscriminator(deserializer.fr(), this.h1c_1);
    var tmp0_elvis_lhs = this.j1c_1.a1k(discriminator, this.n1c_1.p1d_1);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
        var tmp_1;
        if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
          tmp_1 = true;
        } else {
          tmp_1 = this.e1e().b1c_1.v1d_1;
        }
        if (tmp_1) {
          tmp$ret$0 = tmp2.hr(this);
          break $l$block;
        }
        var discriminator_0 = classDiscriminator(tmp2.fr(), this.e1e());
        var tmp0 = this.f1e();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName = tmp2.fr().js();
        if (!(tmp0 instanceof JsonObject)) {
          var tmp_2 = getKClass(JsonObject).lb();
          var tmp_3 = getKClassFromExpression(tmp0).lb();
          var tmp$ret$1 = this.j1c_1.q1c_1.m1h();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
        }
        var jsonTree = tmp0;
        var tmp0_safe_receiver = jsonTree.ae(discriminator_0);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
        var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
        var tmp_4;
        try {
          tmp_4 = findPolymorphicSerializer(tmp2, this, type);
        } catch ($p) {
          var tmp_5;
          if ($p instanceof SerializationException) {
            var it = $p;
            throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
          } else {
            throw $p;
          }
        }
        var tmp_6 = tmp_4;
        var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
        tmp$ret$0 = readPolymorphicJson(this.e1e(), discriminator_0, jsonTree, actualSerializer);
      }
      return tmp$ret$0;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var type_0 = tmp_0;
    var tmp_7;
    try {
      tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
    } catch ($p) {
      var tmp_8;
      if ($p instanceof SerializationException) {
        var it_0 = $p;
        var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
        var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
        this.j1c_1.z1g(message, VOID, hint);
      } else {
        throw $p;
      }
      tmp_7 = tmp_8;
    }
    var tmp_9 = tmp_7;
    var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
    this.m1c_1 = new DiscriminatorHolder(discriminator);
    return actualSerializer_0.hr(this);
  } catch ($p) {
    if ($p instanceof MissingFieldException) {
      var e = $p;
      if (contains_0(ensureNotNull(e.message), 'at path'))
        throw e;
      throw new MissingFieldException(e.zr_1, plus(e.message, ' at path: ') + this.j1c_1.q1c_1.m1h(), e);
    } else {
      throw $p;
    }
  }
};
protoOf(StreamingJsonDecoder).gu = function (descriptor) {
  var newMode = switchMode(this.h1c_1, descriptor);
  this.j1c_1.q1c_1.h1h(descriptor);
  this.j1c_1.s1j(newMode.d1k_1);
  checkLeadingComma(this);
  var tmp;
  switch (newMode.y2_1) {
    case 1:
    case 2:
    case 3:
      tmp = new StreamingJsonDecoder(this.h1c_1, newMode, this.j1c_1, descriptor, this.m1c_1);
      break;
    default:
      var tmp_0;
      if (this.i1c_1.equals(newMode) && this.h1c_1.b1c_1.s1d_1) {
        tmp_0 = this;
      } else {
        tmp_0 = new StreamingJsonDecoder(this.h1c_1, newMode, this.j1c_1, descriptor, this.m1c_1);
      }

      tmp = tmp_0;
      break;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).hu = function (descriptor) {
  if (descriptor.ms() === 0 && ignoreUnknownKeys(descriptor, this.h1c_1)) {
    skipLeftoverElements(this, descriptor);
  }
  if (this.j1c_1.t1j() && !this.h1c_1.b1c_1.b1e_1) {
    invalidTrailingComma(this.j1c_1, '');
  }
  this.j1c_1.s1j(this.i1c_1.e1k_1);
  this.j1c_1.q1c_1.l1h();
};
protoOf(StreamingJsonDecoder).rt = function () {
  var tmp;
  var tmp0_safe_receiver = this.o1c_1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1g_1;
  if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
    tmp = !this.j1c_1.f1k();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).st = function () {
  return null;
};
protoOf(StreamingJsonDecoder).su = function (descriptor, index, deserializer, previousValue) {
  var isMapKey = this.i1c_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
  if (isMapKey) {
    this.j1c_1.q1c_1.k1h();
  }
  var value = protoOf(AbstractDecoder).su.call(this, descriptor, index, deserializer, previousValue);
  if (isMapKey) {
    this.j1c_1.q1c_1.j1h(value);
  }
  return value;
};
protoOf(StreamingJsonDecoder).xu = function (descriptor) {
  var index;
  switch (this.i1c_1.y2_1) {
    case 0:
      index = decodeObjectIndex(this, descriptor);
      break;
    case 2:
      index = decodeMapIndex(this);
      break;
    default:
      index = decodeListIndex(this);
      break;
  }
  if (!this.i1c_1.equals(WriteMode_MAP_getInstance())) {
    this.j1c_1.q1c_1.i1h(index);
  }
  return index;
};
protoOf(StreamingJsonDecoder).tt = function () {
  return this.j1c_1.g1k();
};
protoOf(StreamingJsonDecoder).ut = function () {
  var value = this.j1c_1.h1k();
  if (!value.equals(toLong(value.v3()))) {
    this.j1c_1.z1g("Failed to parse byte for input '" + value.toString() + "'");
  }
  return value.v3();
};
protoOf(StreamingJsonDecoder).vt = function () {
  var value = this.j1c_1.h1k();
  if (!value.equals(toLong(value.w3()))) {
    this.j1c_1.z1g("Failed to parse short for input '" + value.toString() + "'");
  }
  return value.w3();
};
protoOf(StreamingJsonDecoder).wt = function () {
  var value = this.j1c_1.h1k();
  if (!value.equals(toLong(value.c1()))) {
    this.j1c_1.z1g("Failed to parse int for input '" + value.toString() + "'");
  }
  return value.c1();
};
protoOf(StreamingJsonDecoder).xt = function () {
  return this.j1c_1.h1k();
};
protoOf(StreamingJsonDecoder).yt = function () {
  var tmp0 = this.j1c_1;
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.h1i();
    try {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.z1g("Failed to parse type '" + 'float' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$4;
  var specialFp = this.h1c_1.b1c_1.x1d_1;
  if (specialFp || isFinite(result))
    return result;
  throwInvalidFloatingPointDecoded(this.j1c_1, result);
};
protoOf(StreamingJsonDecoder).zt = function () {
  var tmp0 = this.j1c_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.h1i();
    try {
      tmp$ret$1 = toDouble(input);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.z1g("Failed to parse type '" + 'double' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$1;
  var specialFp = this.h1c_1.b1c_1.x1d_1;
  if (specialFp || isFinite_0(result))
    return result;
  throwInvalidFloatingPointDecoded(this.j1c_1, result);
};
protoOf(StreamingJsonDecoder).au = function () {
  var string = this.j1c_1.h1i();
  if (!(string.length === 1)) {
    this.j1c_1.z1g("Expected single char, but got '" + string + "'");
  }
  return charCodeAt(string, 0);
};
protoOf(StreamingJsonDecoder).bu = function () {
  var tmp;
  if (this.n1c_1.p1d_1) {
    tmp = this.j1c_1.z1j();
  } else {
    tmp = this.j1c_1.g1i();
  }
  return tmp;
};
protoOf(StreamingJsonDecoder).du = function (descriptor) {
  return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.j1c_1, this.h1c_1) : protoOf(AbstractDecoder).du.call(this, descriptor);
};
protoOf(StreamingJsonDecoder).cu = function (enumDescriptor) {
  return getJsonNameIndexOrThrow(enumDescriptor, this.h1c_1, this.bu(), ' at path ' + this.j1c_1.q1c_1.m1h());
};
function JsonDecoderForUnsignedTypes(lexer, json) {
  AbstractDecoder.call(this);
  this.i1k_1 = lexer;
  this.j1k_1 = json.vu();
}
protoOf(JsonDecoderForUnsignedTypes).vu = function () {
  return this.j1k_1;
};
protoOf(JsonDecoderForUnsignedTypes).xu = function (descriptor) {
  var message = 'unsupported';
  throw IllegalStateException_init_$Create$(toString(message));
};
protoOf(JsonDecoderForUnsignedTypes).wt = function () {
  var tmp0 = this.i1k_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.h1i();
    try {
      // Inline function 'kotlin.UInt.toInt' call
      var this_0 = toUInt(input);
      tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.z1g("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).xt = function () {
  var tmp0 = this.i1k_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.h1i();
    try {
      // Inline function 'kotlin.ULong.toLong' call
      var this_0 = toULong(input);
      tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.z1g("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).ut = function () {
  var tmp0 = this.i1k_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.h1i();
    try {
      // Inline function 'kotlin.UByte.toByte' call
      var this_0 = toUByte(input);
      tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.z1g("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
protoOf(JsonDecoderForUnsignedTypes).vt = function () {
  var tmp0 = this.i1k_1;
  var tmp$ret$2;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.parseString' call
    var input = tmp0.h1i();
    try {
      // Inline function 'kotlin.UShort.toShort' call
      var this_0 = toUShort(input);
      tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        tmp0.z1g("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$2;
};
function get_unsignedNumberDescriptors() {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return unsignedNumberDescriptors;
}
var unsignedNumberDescriptors;
function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
  StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
  return $this;
}
function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
  return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
}
function encodeTypeInfo($this, discriminator, serialName) {
  $this.q1h_1.t1f();
  $this.kv(discriminator);
  $this.q1h_1.w1f(_Char___init__impl__6a9atx(58));
  $this.q1h_1.v1f();
  $this.kv(serialName);
}
function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
  AbstractEncoder.call(this);
  this.q1h_1 = composer;
  this.r1h_1 = json;
  this.s1h_1 = mode;
  this.t1h_1 = modeReuseCache;
  this.u1h_1 = this.r1h_1.vu();
  this.v1h_1 = this.r1h_1.b1c_1;
  this.w1h_1 = false;
  this.x1h_1 = null;
  this.y1h_1 = null;
  var i = this.s1h_1.y2_1;
  if (!(this.t1h_1 == null)) {
    if (!(this.t1h_1[i] === null) || !(this.t1h_1[i] === this)) {
      this.t1h_1[i] = this;
    }
  }
}
protoOf(StreamingJsonEncoder).e1e = function () {
  return this.r1h_1;
};
protoOf(StreamingJsonEncoder).vu = function () {
  return this.u1h_1;
};
protoOf(StreamingJsonEncoder).dw = function (descriptor, index) {
  return this.v1h_1.n1d_1;
};
protoOf(StreamingJsonEncoder).yv = function (serializer, value) {
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
    if (this.e1e().b1c_1.v1d_1) {
      serializer.gr(this, value);
      break $l$block;
    }
    var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
    var tmp;
    if (isPolymorphicSerializer) {
      tmp = !this.e1e().b1c_1.d1e_1.equals(ClassDiscriminatorMode_NONE_getInstance());
    } else {
      var tmp_0;
      switch (this.e1e().b1c_1.d1e_1.y2_1) {
        case 0:
        case 2:
          tmp_0 = false;
          break;
        case 1:
          // Inline function 'kotlin.let' call

          var it = serializer.fr().ks();
          tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    var needDiscriminator = tmp;
    var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.fr(), this.e1e()) : null;
    var tmp_1;
    if (isPolymorphicSerializer) {
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      $l$block_0: {
        // Inline function 'kotlin.requireNotNull' call
        if (value == null) {
          var message = 'Value for serializer ' + toString(serializer.fr()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          break $l$block_0;
        }
      }
      var actual = findPolymorphicSerializer_0(casted, this, value);
      if (!(baseClassDiscriminator == null)) {
        access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
        checkKind_0(actual.fr().ks());
      }
      tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
    } else {
      tmp_1 = serializer;
    }
    var actualSerializer = tmp_1;
    if (!(baseClassDiscriminator == null)) {
      var serialName = actualSerializer.fr().js();
      this.x1h_1 = baseClassDiscriminator;
      this.y1h_1 = serialName;
    }
    actualSerializer.gr(this, value);
  }
};
protoOf(StreamingJsonEncoder).gu = function (descriptor) {
  var newMode = switchMode(this.r1h_1, descriptor);
  if (!(newMode.d1k_1 === _Char___init__impl__6a9atx(0))) {
    this.q1h_1.w1f(newMode.d1k_1);
    this.q1h_1.r1f();
  }
  var discriminator = this.x1h_1;
  if (!(discriminator == null)) {
    var tmp0_elvis_lhs = this.y1h_1;
    encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.js() : tmp0_elvis_lhs);
    this.x1h_1 = null;
    this.y1h_1 = null;
  }
  if (this.s1h_1.equals(newMode)) {
    return this;
  }
  var tmp1_safe_receiver = this.t1h_1;
  var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.y2_1];
  return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.q1h_1, this.r1h_1, newMode, this.t1h_1) : tmp2_elvis_lhs;
};
protoOf(StreamingJsonEncoder).hu = function (descriptor) {
  if (!(this.s1h_1.e1k_1 === _Char___init__impl__6a9atx(0))) {
    this.q1h_1.s1f();
    this.q1h_1.u1f();
    this.q1h_1.w1f(this.s1h_1.e1k_1);
  }
};
protoOf(StreamingJsonEncoder).zu = function (descriptor, index) {
  switch (this.s1h_1.y2_1) {
    case 1:
      if (!this.q1h_1.q1f_1) {
        this.q1h_1.w1f(_Char___init__impl__6a9atx(44));
      }

      this.q1h_1.t1f();
      break;
    case 2:
      if (!this.q1h_1.q1f_1) {
        var tmp = this;
        var tmp_0;
        if ((index % 2 | 0) === 0) {
          this.q1h_1.w1f(_Char___init__impl__6a9atx(44));
          this.q1h_1.t1f();
          tmp_0 = true;
        } else {
          this.q1h_1.w1f(_Char___init__impl__6a9atx(58));
          this.q1h_1.v1f();
          tmp_0 = false;
        }
        tmp.w1h_1 = tmp_0;
      } else {
        this.w1h_1 = true;
        this.q1h_1.t1f();
      }

      break;
    case 3:
      if (index === 0)
        this.w1h_1 = true;
      if (index === 1) {
        this.q1h_1.w1f(_Char___init__impl__6a9atx(44));
        this.q1h_1.v1f();
        this.w1h_1 = false;
      }

      break;
    default:
      if (!this.q1h_1.q1f_1) {
        this.q1h_1.w1f(_Char___init__impl__6a9atx(44));
      }

      this.q1h_1.t1f();
      this.kv(getJsonElementName(descriptor, this.r1h_1, index));
      this.q1h_1.w1f(_Char___init__impl__6a9atx(58));
      this.q1h_1.v1f();
      break;
  }
  return true;
};
protoOf(StreamingJsonEncoder).zv = function (descriptor, index, serializer, value) {
  if (!(value == null) || this.v1h_1.s1d_1) {
    protoOf(AbstractEncoder).zv.call(this, descriptor, index, serializer, value);
  }
};
protoOf(StreamingJsonEncoder).mv = function (descriptor) {
  var tmp;
  if (get_isUnsignedNumber(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_0;
    var tmp_1 = this.q1h_1;
    if (tmp_1 instanceof ComposerForUnsignedNumbers) {
      tmp_0 = this.q1h_1;
    } else {
      var tmp0 = this.q1h_1.p1f_1;
      var p1 = this.w1h_1;
      tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
    }
    var tmp$ret$1 = tmp_0;
    tmp = new StreamingJsonEncoder(tmp$ret$1, this.r1h_1, this.s1h_1, null);
  } else if (get_isUnquotedLiteral(descriptor)) {
    // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
    var tmp_2;
    var tmp_3 = this.q1h_1;
    if (tmp_3 instanceof ComposerForUnquotedLiterals) {
      tmp_2 = this.q1h_1;
    } else {
      var tmp0_0 = this.q1h_1.p1f_1;
      var p1_0 = this.w1h_1;
      tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
    }
    var tmp$ret$3 = tmp_2;
    tmp = new StreamingJsonEncoder(tmp$ret$3, this.r1h_1, this.s1h_1, null);
  } else if (!(this.x1h_1 == null)) {
    // Inline function 'kotlin.apply' call
    this.y1h_1 = descriptor.js();
    tmp = this;
  } else {
    tmp = protoOf(AbstractEncoder).mv.call(this, descriptor);
  }
  return tmp;
};
protoOf(StreamingJsonEncoder).bv = function () {
  this.q1h_1.y1f('null');
};
protoOf(StreamingJsonEncoder).cv = function (value) {
  if (this.w1h_1) {
    this.kv(value.toString());
  } else {
    this.q1h_1.h1g(value);
  }
};
protoOf(StreamingJsonEncoder).dv = function (value) {
  if (this.w1h_1) {
    this.kv(value.toString());
  } else {
    this.q1h_1.c1g(value);
  }
};
protoOf(StreamingJsonEncoder).ev = function (value) {
  if (this.w1h_1) {
    this.kv(value.toString());
  } else {
    this.q1h_1.e1g(value);
  }
};
protoOf(StreamingJsonEncoder).fv = function (value) {
  if (this.w1h_1) {
    this.kv(value.toString());
  } else {
    this.q1h_1.f1g(value);
  }
};
protoOf(StreamingJsonEncoder).gv = function (value) {
  if (this.w1h_1) {
    this.kv(value.toString());
  } else {
    this.q1h_1.g1g(value);
  }
};
protoOf(StreamingJsonEncoder).hv = function (value) {
  if (this.w1h_1) {
    this.kv(value.toString());
  } else {
    this.q1h_1.a1g(value);
  }
  if (!this.v1h_1.x1d_1 && !isFinite(value)) {
    throw InvalidFloatingPointEncoded_0(value, toString(this.q1h_1.p1f_1));
  }
};
protoOf(StreamingJsonEncoder).iv = function (value) {
  if (this.w1h_1) {
    this.kv(value.toString());
  } else {
    this.q1h_1.b1g(value);
  }
  if (!this.v1h_1.x1d_1 && !isFinite_0(value)) {
    throw InvalidFloatingPointEncoded_0(value, toString(this.q1h_1.p1f_1));
  }
};
protoOf(StreamingJsonEncoder).jv = function (value) {
  this.kv(toString_1(value));
};
protoOf(StreamingJsonEncoder).kv = function (value) {
  return this.q1h_1.i1g(value);
};
protoOf(StreamingJsonEncoder).lv = function (enumDescriptor, index) {
  this.kv(enumDescriptor.os(index));
};
function get_isUnsignedNumber(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.ls() && get_unsignedNumberDescriptors().p(_this__u8e3s4);
}
function get_isUnquotedLiteral(_this__u8e3s4) {
  _init_properties_StreamingJsonEncoder_kt__pn1bsi();
  return _this__u8e3s4.ls() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
}
var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
  if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
    unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).fr(), serializer_0(Companion_getInstance()).fr(), serializer_2(Companion_getInstance_1()).fr(), serializer_3(Companion_getInstance_2()).fr()]);
  }
}
function get_ESCAPE_STRINGS() {
  _init_properties_StringOps_kt__fcy1db();
  return ESCAPE_STRINGS;
}
var ESCAPE_STRINGS;
var ESCAPE_MARKERS;
function toHexChar(i) {
  _init_properties_StringOps_kt__fcy1db();
  var d = i & 15;
  var tmp;
  if (d < 10) {
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    tmp = numberToChar(d + tmp$ret$0 | 0);
  } else {
    var tmp_0 = d - 10 | 0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
    tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
  }
  return tmp;
}
function printQuoted(_this__u8e3s4, value) {
  _init_properties_StringOps_kt__fcy1db();
  _this__u8e3s4.k9(_Char___init__impl__6a9atx(34));
  var lastPos = 0;
  var inductionVariable = 0;
  var last = charSequenceLength(value) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var this_0 = charCodeAt(value, i);
      var c = Char__toInt_impl_vasixd(this_0);
      if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
        _this__u8e3s4.uc(value, lastPos, i);
        _this__u8e3s4.j9(get_ESCAPE_STRINGS()[c]);
        lastPos = i + 1 | 0;
      }
    }
     while (inductionVariable <= last);
  if (!(lastPos === 0))
    _this__u8e3s4.uc(value, lastPos, value.length);
  else
    _this__u8e3s4.j9(value);
  _this__u8e3s4.k9(_Char___init__impl__6a9atx(34));
}
function toBooleanStrictOrNull_0(_this__u8e3s4) {
  _init_properties_StringOps_kt__fcy1db();
  return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
}
var properties_initialized_StringOps_kt_wzaea7;
function _init_properties_StringOps_kt__fcy1db() {
  if (!properties_initialized_StringOps_kt_wzaea7) {
    properties_initialized_StringOps_kt_wzaea7 = true;
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.apply' call
    var this_0 = Array(93);
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c1 = toHexChar(c >> 12);
        var c2 = toHexChar(c >> 8);
        var c3 = toHexChar(c >> 4);
        var c4 = toHexChar(c);
        this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
      }
       while (inductionVariable <= 31);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(34);
    this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(92);
    this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(9);
    this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
    // Inline function 'kotlin.code' call
    var this_4 = _Char___init__impl__6a9atx(8);
    this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
    // Inline function 'kotlin.code' call
    var this_5 = _Char___init__impl__6a9atx(10);
    this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
    // Inline function 'kotlin.code' call
    var this_6 = _Char___init__impl__6a9atx(13);
    this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
    this_0[12] = '\\f';
    ESCAPE_STRINGS = this_0;
    // Inline function 'kotlin.apply' call
    var this_7 = new Int8Array(93);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 <= 31)
      do {
        var c_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_7[c_0] = 1;
      }
       while (inductionVariable_0 <= 31);
    // Inline function 'kotlin.code' call
    var this_8 = _Char___init__impl__6a9atx(34);
    var tmp = Char__toInt_impl_vasixd(this_8);
    // Inline function 'kotlin.code' call
    var this_9 = _Char___init__impl__6a9atx(34);
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
    this_7[tmp] = toByte(tmp$ret$1);
    // Inline function 'kotlin.code' call
    var this_10 = _Char___init__impl__6a9atx(92);
    var tmp_0 = Char__toInt_impl_vasixd(this_10);
    // Inline function 'kotlin.code' call
    var this_11 = _Char___init__impl__6a9atx(92);
    var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
    this_7[tmp_0] = toByte(tmp$ret$3);
    // Inline function 'kotlin.code' call
    var this_12 = _Char___init__impl__6a9atx(9);
    var tmp_1 = Char__toInt_impl_vasixd(this_12);
    // Inline function 'kotlin.code' call
    var this_13 = _Char___init__impl__6a9atx(116);
    var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
    this_7[tmp_1] = toByte(tmp$ret$5);
    // Inline function 'kotlin.code' call
    var this_14 = _Char___init__impl__6a9atx(8);
    var tmp_2 = Char__toInt_impl_vasixd(this_14);
    // Inline function 'kotlin.code' call
    var this_15 = _Char___init__impl__6a9atx(98);
    var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
    this_7[tmp_2] = toByte(tmp$ret$7);
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(10);
    var tmp_3 = Char__toInt_impl_vasixd(this_16);
    // Inline function 'kotlin.code' call
    var this_17 = _Char___init__impl__6a9atx(110);
    var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
    this_7[tmp_3] = toByte(tmp$ret$9);
    // Inline function 'kotlin.code' call
    var this_18 = _Char___init__impl__6a9atx(13);
    var tmp_4 = Char__toInt_impl_vasixd(this_18);
    // Inline function 'kotlin.code' call
    var this_19 = _Char___init__impl__6a9atx(114);
    var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
    this_7[tmp_4] = toByte(tmp$ret$11);
    // Inline function 'kotlin.code' call
    var this_20 = _Char___init__impl__6a9atx(102);
    var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
    this_7[12] = toByte(tmp$ret$12);
    ESCAPE_MARKERS = this_7;
  }
}
function unparsedPrimitive($this, literal, primitive, tag) {
  var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
  throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.q1k(tag), toString($this.r1k()));
}
function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
  polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
  NamedValueDecoder.call(this);
  this.m1k_1 = json;
  this.n1k_1 = value;
  this.o1k_1 = polymorphicDiscriminator;
  this.p1k_1 = this.e1e().b1c_1;
}
protoOf(AbstractJsonTreeDecoder).e1e = function () {
  return this.m1k_1;
};
protoOf(AbstractJsonTreeDecoder).n2 = function () {
  return this.n1k_1;
};
protoOf(AbstractJsonTreeDecoder).vu = function () {
  return this.e1e().vu();
};
protoOf(AbstractJsonTreeDecoder).r1k = function () {
  var tmp0_safe_receiver = this.o18();
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = this.s1k(tmp0_safe_receiver);
  }
  var tmp1_elvis_lhs = tmp;
  return tmp1_elvis_lhs == null ? this.n2() : tmp1_elvis_lhs;
};
protoOf(AbstractJsonTreeDecoder).q1k = function (currentTag) {
  return this.m19() + ('.' + currentTag);
};
protoOf(AbstractJsonTreeDecoder).f1e = function () {
  return this.r1k();
};
protoOf(AbstractJsonTreeDecoder).fu = function (deserializer) {
  var tmp$ret$0;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = this.e1e().b1c_1.v1d_1;
    }
    if (tmp) {
      tmp$ret$0 = deserializer.hr(this);
      break $l$block;
    }
    var discriminator = classDiscriminator(deserializer.fr(), this.e1e());
    var tmp0 = this.f1e();
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = deserializer.fr().js();
    if (!(tmp0 instanceof JsonObject)) {
      var tmp_0 = getKClass(JsonObject).lb();
      var tmp_1 = getKClassFromExpression(tmp0).lb();
      var tmp$ret$1 = this.m19();
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
    }
    var jsonTree = tmp0;
    var tmp0_safe_receiver = jsonTree.ae(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
    var tmp_2;
    try {
      tmp_2 = findPolymorphicSerializer(deserializer, this, type);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof SerializationException) {
        var it = $p;
        throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
      } else {
        throw $p;
      }
    }
    var tmp_4 = tmp_2;
    var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
    tmp$ret$0 = readPolymorphicJson(this.e1e(), discriminator, jsonTree, actualSerializer);
  }
  return tmp$ret$0;
};
protoOf(AbstractJsonTreeDecoder).p18 = function (parentName, childName) {
  return childName;
};
protoOf(AbstractJsonTreeDecoder).gu = function (descriptor) {
  var currentObject = this.r1k();
  var tmp0_subject = descriptor.ks();
  var tmp;
  var tmp_0;
  if (equals(tmp0_subject, LIST_getInstance())) {
    tmp_0 = true;
  } else {
    tmp_0 = tmp0_subject instanceof PolymorphicKind;
  }
  if (tmp_0) {
    var tmp_1 = this.e1e();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = descriptor.js();
    if (!(currentObject instanceof JsonArray)) {
      var tmp_2 = getKClass(JsonArray).lb();
      var tmp_3 = getKClassFromExpression(currentObject).lb();
      var tmp$ret$0 = this.m19();
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
    }
    tmp = new JsonTreeListDecoder(tmp_1, currentObject);
  } else {
    if (equals(tmp0_subject, MAP_getInstance())) {
      // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
      var this_0 = this.e1e();
      var keyDescriptor = carrierDescriptor(descriptor.rs(0), this_0.vu());
      var keyKind = keyDescriptor.ks();
      var tmp_4;
      var tmp_5;
      if (keyKind instanceof PrimitiveKind) {
        tmp_5 = true;
      } else {
        tmp_5 = equals(keyKind, ENUM_getInstance());
      }
      if (tmp_5) {
        var tmp_6 = this.e1e();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_0 = descriptor.js();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_7 = getKClass(JsonObject).lb();
          var tmp_8 = getKClassFromExpression(currentObject).lb();
          var tmp$ret$3 = this.m19();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
        }
        tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
      } else {
        if (this_0.b1c_1.q1d_1) {
          var tmp_9 = this.e1e();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_1 = descriptor.js();
          if (!(currentObject instanceof JsonArray)) {
            var tmp_10 = getKClass(JsonArray).lb();
            var tmp_11 = getKClassFromExpression(currentObject).lb();
            var tmp$ret$7 = this.m19();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
          }
          tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
        } else {
          throw InvalidKeyKindException(keyDescriptor);
        }
      }
      tmp = tmp_4;
    } else {
      var tmp_12 = this.e1e();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName_2 = descriptor.js();
      if (!(currentObject instanceof JsonObject)) {
        var tmp_13 = getKClass(JsonObject).lb();
        var tmp_14 = getKClassFromExpression(currentObject).lb();
        var tmp$ret$12 = this.m19();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
      }
      tmp = new JsonTreeDecoder(tmp_12, currentObject, this.o1k_1);
    }
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).hu = function (descriptor) {
};
protoOf(AbstractJsonTreeDecoder).rt = function () {
  var tmp = this.r1k();
  return !(tmp instanceof JsonNull);
};
protoOf(AbstractJsonTreeDecoder).t1k = function (tag, enumDescriptor) {
  var tmp = this.e1e();
  // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
  var tmp2 = this.s1k(tag);
  // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
  // Inline function 'kotlinx.serialization.json.internal.cast' call
  var serialName = enumDescriptor.js();
  if (!(tmp2 instanceof JsonPrimitive)) {
    var tmp_0 = getKClass(JsonPrimitive).lb();
    var tmp_1 = getKClassFromExpression(tmp2).lb();
    var tmp$ret$0 = this.q1k(tag);
    throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
  }
  return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.l1e());
};
protoOf(AbstractJsonTreeDecoder).y19 = function (tag, enumDescriptor) {
  return this.t1k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
};
protoOf(AbstractJsonTreeDecoder).u1k = function (tag) {
  return !(this.s1k(tag) === JsonNull_getInstance());
};
protoOf(AbstractJsonTreeDecoder).o19 = function (tag) {
  return this.u1k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).v1k = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.s1k(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).lb();
      var tmp_0 = getKClassFromExpression(value).lb();
      var tmp$ret$0 = this.q1k(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var tmp0_elvis_lhs = get_booleanOrNull(literal);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'boolean', tag);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$4 = tmp_1;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'boolean', tag);
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
};
protoOf(AbstractJsonTreeDecoder).p19 = function (tag) {
  return this.v1k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).w1k = function (tag) {
  var tmp$ret$5;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.s1k(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).lb();
      var tmp_0 = getKClassFromExpression(value).lb();
      var tmp$ret$0 = this.q1k(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var result = parseLongImpl(literal);
      var tmp_1;
      // Inline function 'kotlin.ranges.contains' call
      var this_0 = numberRangeToNumber(-128, 127);
      if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
        tmp_1 = result.v3();
      } else {
        tmp_1 = null;
      }
      var tmp0_elvis_lhs = tmp_1;
      var tmp_2;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'byte', tag);
      } else {
        tmp_2 = tmp0_elvis_lhs;
      }
      tmp$ret$5 = tmp_2;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'byte', tag);
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
};
protoOf(AbstractJsonTreeDecoder).q19 = function (tag) {
  return this.w1k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).x1k = function (tag) {
  var tmp$ret$5;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.s1k(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).lb();
      var tmp_0 = getKClassFromExpression(value).lb();
      var tmp$ret$0 = this.q1k(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var result = parseLongImpl(literal);
      var tmp_1;
      // Inline function 'kotlin.ranges.contains' call
      var this_0 = numberRangeToNumber(-32768, 32767);
      if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
        tmp_1 = result.w3();
      } else {
        tmp_1 = null;
      }
      var tmp0_elvis_lhs = tmp_1;
      var tmp_2;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'short', tag);
      } else {
        tmp_2 = tmp0_elvis_lhs;
      }
      tmp$ret$5 = tmp_2;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'short', tag);
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
};
protoOf(AbstractJsonTreeDecoder).r19 = function (tag) {
  return this.x1k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).y1k = function (tag) {
  var tmp$ret$5;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.s1k(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).lb();
      var tmp_0 = getKClassFromExpression(value).lb();
      var tmp$ret$0 = this.q1k(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var result = parseLongImpl(literal);
      var tmp_1;
      // Inline function 'kotlin.ranges.contains' call
      var this_0 = numberRangeToNumber(-2147483648, 2147483647);
      if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
        tmp_1 = result.c1();
      } else {
        tmp_1 = null;
      }
      var tmp0_elvis_lhs = tmp_1;
      var tmp_2;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'int', tag);
      } else {
        tmp_2 = tmp0_elvis_lhs;
      }
      tmp$ret$5 = tmp_2;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'int', tag);
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$5;
};
protoOf(AbstractJsonTreeDecoder).s19 = function (tag) {
  return this.y1k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).z1k = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.s1k(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).lb();
      var tmp_0 = getKClassFromExpression(value).lb();
      var tmp$ret$0 = this.q1k(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var tmp0_elvis_lhs = parseLongImpl(literal);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'long', tag);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$4 = tmp_1;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'long', tag);
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
};
protoOf(AbstractJsonTreeDecoder).t19 = function (tag) {
  return this.z1k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).a1l = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.s1k(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).lb();
      var tmp_0 = getKClassFromExpression(value).lb();
      var tmp$ret$0 = this.q1k(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'float' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var tmp0_elvis_lhs = get_float(literal);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'float', tag);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$4 = tmp_1;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'float', tag);
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$4;
  var specialFp = this.e1e().b1c_1.x1d_1;
  if (specialFp || isFinite(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.r1k()));
};
protoOf(AbstractJsonTreeDecoder).u19 = function (tag) {
  return this.a1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).b1l = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.s1k(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).lb();
      var tmp_0 = getKClassFromExpression(value).lb();
      var tmp$ret$0 = this.q1k(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var tmp0_elvis_lhs = get_double(literal);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'double', tag);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$4 = tmp_1;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'double', tag);
      } else {
        throw $p;
      }
    }
  }
  var result = tmp$ret$4;
  var specialFp = this.e1e().b1c_1.x1d_1;
  if (specialFp || isFinite_0(result))
    return result;
  throw InvalidFloatingPointDecoded(result, tag, toString(this.r1k()));
};
protoOf(AbstractJsonTreeDecoder).v19 = function (tag) {
  return this.b1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).c1l = function (tag) {
  var tmp$ret$4;
  $l$block: {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.s1k(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).lb();
      var tmp_0 = getKClassFromExpression(value).lb();
      var tmp$ret$0 = this.q1k(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var literal = value;
    try {
      var tmp0_elvis_lhs = new Char(single(literal.l1e()));
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        unparsedPrimitive(this, literal, 'char', tag);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$4 = tmp_1.n1_1;
      break $l$block;
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        unparsedPrimitive(this, literal, 'char', tag);
      } else {
        throw $p;
      }
    }
  }
  return tmp$ret$4;
};
protoOf(AbstractJsonTreeDecoder).w19 = function (tag) {
  return this.c1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).d1l = function (tag) {
  // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
  // Inline function 'kotlinx.serialization.json.internal.cast' call
  var value = this.s1k(tag);
  if (!(value instanceof JsonPrimitive)) {
    var tmp = getKClass(JsonPrimitive).lb();
    var tmp_0 = getKClassFromExpression(value).lb();
    var tmp$ret$0 = this.q1k(tag);
    throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
  }
  var value_0 = value;
  if (!(value_0 instanceof JsonLiteral))
    throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.q1k(tag), toString(this.r1k()));
  if (!value_0.n1e_1 && !this.e1e().b1c_1.p1d_1) {
    throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.q1k(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.r1k()));
  }
  return value_0.p1e_1;
};
protoOf(AbstractJsonTreeDecoder).x19 = function (tag) {
  return this.d1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeDecoder).e1l = function (tag, inlineDescriptor) {
  var tmp;
  if (get_isUnsignedNumber(inlineDescriptor)) {
    var tmp_0 = this.e1e();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.s1k(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = inlineDescriptor.js();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp_1 = getKClass(JsonPrimitive).lb();
      var tmp_2 = getKClassFromExpression(tmp2).lb();
      var tmp$ret$0 = this.q1k(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
    }
    var lexer = StringJsonLexer_0(tmp_0, tmp2.l1e());
    tmp = new JsonDecoderForUnsignedTypes(lexer, this.e1e());
  } else {
    tmp = protoOf(NamedValueDecoder).z19.call(this, tag, inlineDescriptor);
  }
  return tmp;
};
protoOf(AbstractJsonTreeDecoder).z19 = function (tag, inlineDescriptor) {
  return this.e1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
};
protoOf(AbstractJsonTreeDecoder).du = function (descriptor) {
  return !(this.o18() == null) ? protoOf(NamedValueDecoder).du.call(this, descriptor) : (new JsonPrimitiveDecoder(this.e1e(), this.n2(), this.o1k_1)).du(descriptor);
};
function setForceNull($this, descriptor, index) {
  $this.o1l_1 = (!$this.e1e().b1c_1.s1d_1 && !descriptor.ss(index) && descriptor.rs(index).fs());
  return $this.o1l_1;
}
function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
  polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
  polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
  AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
  this.l1l_1 = value;
  this.m1l_1 = polyDescriptor;
  this.n1l_1 = 0;
  this.o1l_1 = false;
}
protoOf(JsonTreeDecoder).n2 = function () {
  return this.l1l_1;
};
protoOf(JsonTreeDecoder).xu = function (descriptor) {
  $l$loop: while (this.n1l_1 < descriptor.ms()) {
    var _unary__edvuaz = this.n1l_1;
    this.n1l_1 = _unary__edvuaz + 1 | 0;
    var name = this.k18(descriptor, _unary__edvuaz);
    var index = this.n1l_1 - 1 | 0;
    this.o1l_1 = false;
    var tmp;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.n2();
    if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).o2(name)) {
      tmp = true;
    } else {
      tmp = setForceNull(this, descriptor, index);
    }
    if (tmp) {
      if (!this.p1k_1.u1d_1)
        return index;
      var tmp0 = this.e1e();
      var tmp$ret$3;
      $l$block_2: {
        // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
        var isOptional = descriptor.ss(index);
        var elementDescriptor = descriptor.rs(index);
        var tmp_0;
        if (isOptional && !elementDescriptor.fs()) {
          var tmp_1 = this.p1l(name);
          tmp_0 = tmp_1 instanceof JsonNull;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$3 = true;
          break $l$block_2;
        }
        if (equals(elementDescriptor.ks(), ENUM_getInstance())) {
          var tmp_2;
          if (elementDescriptor.fs()) {
            var tmp_3 = this.p1l(name);
            tmp_2 = tmp_3 instanceof JsonNull;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            tmp$ret$3 = false;
            break $l$block_2;
          }
          var tmp_4 = this.p1l(name);
          var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
          var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
          var tmp_5;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$3 = false;
            break $l$block_2;
          } else {
            tmp_5 = tmp0_elvis_lhs;
          }
          var enumValue = tmp_5;
          var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
          var coerceToNull = !tmp0.b1c_1.s1d_1 && elementDescriptor.fs();
          if (enumIndex === -3 && (isOptional || coerceToNull)) {
            if (setForceNull(this, descriptor, index))
              return index;
            tmp$ret$3 = true;
            break $l$block_2;
          }
        }
        tmp$ret$3 = false;
      }
      if (tmp$ret$3)
        continue $l$loop;
      return index;
    }
  }
  return -1;
};
protoOf(JsonTreeDecoder).rt = function () {
  return !this.o1l_1 && protoOf(AbstractJsonTreeDecoder).rt.call(this);
};
protoOf(JsonTreeDecoder).l18 = function (descriptor, index) {
  var strategy = namingStrategy(descriptor, this.e1e());
  var baseName = descriptor.os(index);
  if (strategy == null) {
    if (!this.p1k_1.y1d_1)
      return baseName;
    if (this.n2().r2().p(baseName))
      return baseName;
  }
  var deserializationNamesMap_0 = deserializationNamesMap(this.e1e(), descriptor);
  // Inline function 'kotlin.collections.find' call
  var tmp0 = this.n2().r2();
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      if (deserializationNamesMap_0.q2(element) === index) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp0_safe_receiver = tmp$ret$1;
  if (tmp0_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    return tmp0_safe_receiver;
  }
  var fallbackName = strategy == null ? null : strategy.d1h(descriptor, index, baseName);
  return fallbackName == null ? baseName : fallbackName;
};
protoOf(JsonTreeDecoder).s1k = function (tag) {
  return getValue(this.n2(), tag);
};
protoOf(JsonTreeDecoder).p1l = function (tag) {
  return this.n2().ae(tag);
};
protoOf(JsonTreeDecoder).gu = function (descriptor) {
  if (descriptor === this.m1l_1) {
    var tmp = this.e1e();
    var tmp2 = this.r1k();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = this.m1l_1.js();
    if (!(tmp2 instanceof JsonObject)) {
      var tmp_0 = getKClass(JsonObject).lb();
      var tmp_1 = getKClassFromExpression(tmp2).lb();
      var tmp$ret$0 = this.m19();
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp2));
    }
    return new JsonTreeDecoder(tmp, tmp2, this.o1k_1, this.m1l_1);
  }
  return protoOf(AbstractJsonTreeDecoder).gu.call(this, descriptor);
};
protoOf(JsonTreeDecoder).hu = function (descriptor) {
  var tmp;
  if (ignoreUnknownKeys(descriptor, this.e1e())) {
    tmp = true;
  } else {
    var tmp_0 = descriptor.ks();
    tmp = tmp_0 instanceof PolymorphicKind;
  }
  if (tmp)
    return Unit_instance;
  var strategy = namingStrategy(descriptor, this.e1e());
  var tmp_1;
  if (strategy == null && !this.p1k_1.y1d_1) {
    tmp_1 = jsonCachedSerialNames(descriptor);
  } else if (!(strategy == null)) {
    tmp_1 = deserializationNamesMap(this.e1e(), descriptor).r2();
  } else {
    var tmp_2 = jsonCachedSerialNames(descriptor);
    var tmp0_safe_receiver = get_schemaCache(this.e1e()).q1j(descriptor, get_JsonDeserializationNamesKey());
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r2();
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
    tmp_1 = plus_0(tmp_2, tmp$ret$0);
  }
  var names = tmp_1;
  var _iterator__ex2g4s = this.n2().r2().g();
  while (_iterator__ex2g4s.h()) {
    var key = _iterator__ex2g4s.i();
    if (!names.p(key) && !(key === this.o1k_1)) {
      throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.m19() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.n2().toString()))));
    }
  }
};
function JsonTreeListDecoder(json, value) {
  AbstractJsonTreeDecoder.call(this, json, value);
  this.w1l_1 = value;
  this.x1l_1 = this.w1l_1.j();
  this.y1l_1 = -1;
}
protoOf(JsonTreeListDecoder).n2 = function () {
  return this.w1l_1;
};
protoOf(JsonTreeListDecoder).l18 = function (descriptor, index) {
  return index.toString();
};
protoOf(JsonTreeListDecoder).s1k = function (tag) {
  return this.w1l_1.o(toInt(tag));
};
protoOf(JsonTreeListDecoder).xu = function (descriptor) {
  while (this.y1l_1 < (this.x1l_1 - 1 | 0)) {
    this.y1l_1 = this.y1l_1 + 1 | 0;
    return this.y1l_1;
  }
  return -1;
};
function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
  polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
  AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
  this.f1m_1 = value;
  this.g19('primitive');
}
protoOf(JsonPrimitiveDecoder).n2 = function () {
  return this.f1m_1;
};
protoOf(JsonPrimitiveDecoder).xu = function (descriptor) {
  return 0;
};
protoOf(JsonPrimitiveDecoder).s1k = function (tag) {
  // Inline function 'kotlin.require' call
  if (!(tag === 'primitive')) {
    var message = "This input can only handle primitives with 'primitive' tag";
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return this.f1m_1;
};
function JsonTreeMapDecoder(json, value) {
  JsonTreeDecoder.call(this, json, value);
  this.q1m_1 = value;
  this.r1m_1 = toList(this.q1m_1.r2());
  this.s1m_1 = imul(this.r1m_1.j(), 2);
  this.t1m_1 = -1;
}
protoOf(JsonTreeMapDecoder).n2 = function () {
  return this.q1m_1;
};
protoOf(JsonTreeMapDecoder).l18 = function (descriptor, index) {
  var i = index / 2 | 0;
  return this.r1m_1.o(i);
};
protoOf(JsonTreeMapDecoder).xu = function (descriptor) {
  while (this.t1m_1 < (this.s1m_1 - 1 | 0)) {
    this.t1m_1 = this.t1m_1 + 1 | 0;
    return this.t1m_1;
  }
  return -1;
};
protoOf(JsonTreeMapDecoder).s1k = function (tag) {
  return (this.t1m_1 % 2 | 0) === 0 ? JsonPrimitive_2(tag) : getValue(this.q1m_1, tag);
};
protoOf(JsonTreeMapDecoder).hu = function (descriptor) {
};
function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
  return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.fr())).fu(deserializer);
}
function writeJson(json, value, serializer) {
  var result = {_v: null};
  var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
  encoder.yv(serializer, value);
  var tmp;
  if (result._v == null) {
    throwUninitializedPropertyAccessException('result');
  } else {
    tmp = result._v;
  }
  return tmp;
}
function JsonTreeEncoder(json, nodeConsumer) {
  AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
  var tmp = this;
  // Inline function 'kotlin.collections.linkedMapOf' call
  tmp.g1n_1 = LinkedHashMap_init_$Create$();
}
protoOf(JsonTreeEncoder).h1n = function (key, element) {
  // Inline function 'kotlin.collections.set' call
  this.g1n_1.u2(key, element);
};
protoOf(JsonTreeEncoder).zv = function (descriptor, index, serializer, value) {
  if (!(value == null) || this.x1m_1.s1d_1) {
    protoOf(AbstractJsonTreeEncoder).zv.call(this, descriptor, index, serializer, value);
  }
};
protoOf(JsonTreeEncoder).i1n = function () {
  return new JsonObject(this.g1n_1);
};
function inlineUnsignedNumberEncoder($this, tag) {
  return new AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1($this, tag);
}
function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
  return new AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1($this, tag, inlineDescriptor);
}
function AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1(this$0, $tag) {
  this.x1n_1 = this$0;
  this.y1n_1 = $tag;
  AbstractEncoder.call(this);
  this.w1n_1 = this$0.v1m_1.vu();
}
protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).vu = function () {
  return this.w1n_1;
};
protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).z1n = function (s) {
  return this.x1n_1.h1n(this.y1n_1, new JsonLiteral(s, false));
};
protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).fv = function (value) {
  // Inline function 'kotlin.toUInt' call
  var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
  return this.z1n(UInt__toString_impl_dbgl21(tmp$ret$0));
};
protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).gv = function (value) {
  // Inline function 'kotlin.toULong' call
  var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
  return this.z1n(ULong__toString_impl_f9au7k(tmp$ret$0));
};
protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).dv = function (value) {
  // Inline function 'kotlin.toUByte' call
  var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
  return this.z1n(UByte__toString_impl_v72jg(tmp$ret$0));
};
protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).ev = function (value) {
  // Inline function 'kotlin.toUShort' call
  var tmp$ret$0 = _UShort___init__impl__jigrne(value);
  return this.z1n(UShort__toString_impl_edaoee(tmp$ret$0));
};
function AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1(this$0, $tag, $inlineDescriptor) {
  this.a1o_1 = this$0;
  this.b1o_1 = $tag;
  this.c1o_1 = $inlineDescriptor;
  AbstractEncoder.call(this);
}
protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).vu = function () {
  return this.a1o_1.v1m_1.vu();
};
protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).kv = function (value) {
  return this.a1o_1.h1n(this.b1o_1, new JsonLiteral(value, false, this.c1o_1));
};
function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
  return function (node) {
    this$0.h1n(this$0.f19(), node);
    return Unit_instance;
  };
}
function AbstractJsonTreeEncoder(json, nodeConsumer) {
  NamedValueEncoder.call(this);
  this.v1m_1 = json;
  this.w1m_1 = nodeConsumer;
  this.x1m_1 = this.v1m_1.b1c_1;
  this.y1m_1 = null;
  this.z1m_1 = null;
}
protoOf(AbstractJsonTreeEncoder).e1e = function () {
  return this.v1m_1;
};
protoOf(AbstractJsonTreeEncoder).vu = function () {
  return this.v1m_1.vu();
};
protoOf(AbstractJsonTreeEncoder).l18 = function (descriptor, index) {
  return getJsonElementName(descriptor, this.v1m_1, index);
};
protoOf(AbstractJsonTreeEncoder).dw = function (descriptor, index) {
  return this.x1m_1.n1d_1;
};
protoOf(AbstractJsonTreeEncoder).p18 = function (parentName, childName) {
  return childName;
};
protoOf(AbstractJsonTreeEncoder).bw = function () {
};
protoOf(AbstractJsonTreeEncoder).bv = function () {
  var tmp0_elvis_lhs = this.o18();
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return this.w1m_1(JsonNull_getInstance());
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var tag = tmp;
  this.j1n(tag);
};
protoOf(AbstractJsonTreeEncoder).j1n = function (tag) {
  return this.h1n(tag, JsonNull_getInstance());
};
protoOf(AbstractJsonTreeEncoder).s18 = function (tag) {
  return this.j1n((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
};
protoOf(AbstractJsonTreeEncoder).k1n = function (tag, value) {
  return this.h1n(tag, JsonPrimitive_0(value));
};
protoOf(AbstractJsonTreeEncoder).t18 = function (tag, value) {
  return this.k1n((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
};
protoOf(AbstractJsonTreeEncoder).l1n = function (tag, value) {
  return this.h1n(tag, JsonPrimitive_0(value));
};
protoOf(AbstractJsonTreeEncoder).u18 = function (tag, value) {
  return this.l1n((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
};
protoOf(AbstractJsonTreeEncoder).m1n = function (tag, value) {
  return this.h1n(tag, JsonPrimitive_0(value));
};
protoOf(AbstractJsonTreeEncoder).v18 = function (tag, value) {
  return this.m1n((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
};
protoOf(AbstractJsonTreeEncoder).n1n = function (tag, value) {
  return this.h1n(tag, JsonPrimitive_0(value));
};
protoOf(AbstractJsonTreeEncoder).w18 = function (tag, value) {
  return this.n1n((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
};
protoOf(AbstractJsonTreeEncoder).o1n = function (tag, value) {
  this.h1n(tag, JsonPrimitive_0(value));
  if (!this.x1m_1.x1d_1 && !isFinite(value)) {
    throw InvalidFloatingPointEncoded(value, tag, toString(this.i1n()));
  }
};
protoOf(AbstractJsonTreeEncoder).x18 = function (tag, value) {
  return this.o1n((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
};
protoOf(AbstractJsonTreeEncoder).yv = function (serializer, value) {
  if (!(this.o18() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.fr(), this.vu()))) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.e1e().b1c_1.v1d_1) {
        serializer.gr(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.e1e().b1c_1.d1e_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.e1e().b1c_1.d1e_1.y2_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.fr().ks();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.fr(), this.e1e()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.fr()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
          checkKind_0(actual.fr().ks());
        }
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        var serialName = actualSerializer.fr().js();
        this.y1m_1 = baseClassDiscriminator;
        this.z1m_1 = serialName;
      }
      actualSerializer.gr(this, value);
    }
  } else {
    // Inline function 'kotlin.apply' call
    (new JsonPrimitiveEncoder(this.v1m_1, this.w1m_1)).yv(serializer, value);
  }
};
protoOf(AbstractJsonTreeEncoder).p1n = function (tag, value) {
  this.h1n(tag, JsonPrimitive_0(value));
  if (!this.x1m_1.x1d_1 && !isFinite_0(value)) {
    throw InvalidFloatingPointEncoded(value, tag, toString(this.i1n()));
  }
};
protoOf(AbstractJsonTreeEncoder).y18 = function (tag, value) {
  return this.p1n((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
};
protoOf(AbstractJsonTreeEncoder).q1n = function (tag, value) {
  return this.h1n(tag, JsonPrimitive_1(value));
};
protoOf(AbstractJsonTreeEncoder).z18 = function (tag, value) {
  return this.q1n((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
};
protoOf(AbstractJsonTreeEncoder).r1n = function (tag, value) {
  return this.h1n(tag, JsonPrimitive_2(toString_1(value)));
};
protoOf(AbstractJsonTreeEncoder).a19 = function (tag, value) {
  return this.r1n((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
};
protoOf(AbstractJsonTreeEncoder).s1n = function (tag, value) {
  return this.h1n(tag, JsonPrimitive_2(value));
};
protoOf(AbstractJsonTreeEncoder).b19 = function (tag, value) {
  return this.s1n((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
};
protoOf(AbstractJsonTreeEncoder).t1n = function (tag, enumDescriptor, ordinal) {
  return this.h1n(tag, JsonPrimitive_2(enumDescriptor.os(ordinal)));
};
protoOf(AbstractJsonTreeEncoder).c19 = function (tag, enumDescriptor, ordinal) {
  return this.t1n((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
};
protoOf(AbstractJsonTreeEncoder).u1n = function (tag, value) {
  this.h1n(tag, JsonPrimitive_2(toString(value)));
};
protoOf(AbstractJsonTreeEncoder).q18 = function (tag, value) {
  return this.u1n((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
};
protoOf(AbstractJsonTreeEncoder).v1n = function (tag, inlineDescriptor) {
  return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : protoOf(NamedValueEncoder).d19.call(this, tag, inlineDescriptor);
};
protoOf(AbstractJsonTreeEncoder).d19 = function (tag, inlineDescriptor) {
  return this.v1n((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
};
protoOf(AbstractJsonTreeEncoder).mv = function (descriptor) {
  var tmp;
  if (!(this.o18() == null)) {
    if (!(this.y1m_1 == null))
      this.z1m_1 = descriptor.js();
    tmp = protoOf(NamedValueEncoder).mv.call(this, descriptor);
  } else {
    tmp = (new JsonPrimitiveEncoder(this.v1m_1, this.w1m_1)).mv(descriptor);
  }
  return tmp;
};
protoOf(AbstractJsonTreeEncoder).gu = function (descriptor) {
  var tmp;
  if (this.o18() == null) {
    tmp = this.w1m_1;
  } else {
    tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
  }
  var consumer = tmp;
  var tmp0_subject = descriptor.ks();
  var tmp_0;
  var tmp_1;
  if (equals(tmp0_subject, LIST_getInstance())) {
    tmp_1 = true;
  } else {
    tmp_1 = tmp0_subject instanceof PolymorphicKind;
  }
  if (tmp_1) {
    tmp_0 = new JsonTreeListEncoder(this.v1m_1, consumer);
  } else {
    if (equals(tmp0_subject, MAP_getInstance())) {
      // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
      var this_0 = this.v1m_1;
      var keyDescriptor = carrierDescriptor(descriptor.rs(0), this_0.vu());
      var keyKind = keyDescriptor.ks();
      var tmp_2;
      var tmp_3;
      if (keyKind instanceof PrimitiveKind) {
        tmp_3 = true;
      } else {
        tmp_3 = equals(keyKind, ENUM_getInstance());
      }
      if (tmp_3) {
        tmp_2 = new JsonTreeMapEncoder(this.v1m_1, consumer);
      } else {
        if (this_0.b1c_1.q1d_1) {
          tmp_2 = new JsonTreeListEncoder(this.v1m_1, consumer);
        } else {
          throw InvalidKeyKindException(keyDescriptor);
        }
      }
      tmp_0 = tmp_2;
    } else {
      tmp_0 = new JsonTreeEncoder(this.v1m_1, consumer);
    }
  }
  var encoder = tmp_0;
  var discriminator = this.y1m_1;
  if (!(discriminator == null)) {
    if (encoder instanceof JsonTreeMapEncoder) {
      encoder.h1n('key', JsonPrimitive_2(discriminator));
      var tmp1_elvis_lhs = this.z1m_1;
      encoder.h1n('value', JsonPrimitive_2(tmp1_elvis_lhs == null ? descriptor.js() : tmp1_elvis_lhs));
    } else {
      var tmp2_elvis_lhs = this.z1m_1;
      encoder.h1n(discriminator, JsonPrimitive_2(tmp2_elvis_lhs == null ? descriptor.js() : tmp2_elvis_lhs));
    }
    this.y1m_1 = null;
    this.z1m_1 = null;
  }
  return encoder;
};
protoOf(AbstractJsonTreeEncoder).e19 = function (descriptor) {
  this.w1m_1(this.i1n());
};
function get_requiresTopLevelTag(_this__u8e3s4) {
  var tmp;
  var tmp_0 = _this__u8e3s4.ks();
  if (tmp_0 instanceof PrimitiveKind) {
    tmp = true;
  } else {
    tmp = _this__u8e3s4.ks() === ENUM_getInstance();
  }
  return tmp;
}
function JsonPrimitiveEncoder(json, nodeConsumer) {
  AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
  this.s1o_1 = null;
  this.g19('primitive');
}
protoOf(JsonPrimitiveEncoder).h1n = function (key, element) {
  // Inline function 'kotlin.require' call
  if (!(key === 'primitive')) {
    var message = "This output can only consume primitives with 'primitive' tag";
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(this.s1o_1 == null)) {
    var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  this.s1o_1 = element;
  this.w1m_1(element);
};
protoOf(JsonPrimitiveEncoder).i1n = function () {
  var tmp0 = this.s1o_1;
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.requireNotNull' call
    if (tmp0 == null) {
      var message = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
      throw IllegalArgumentException_init_$Create$(toString(message));
    } else {
      tmp$ret$1 = tmp0;
      break $l$block;
    }
  }
  return tmp$ret$1;
};
function JsonTreeListEncoder(json, nodeConsumer) {
  AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
  var tmp = this;
  // Inline function 'kotlin.collections.arrayListOf' call
  tmp.z1o_1 = ArrayList_init_$Create$();
}
protoOf(JsonTreeListEncoder).l18 = function (descriptor, index) {
  return index.toString();
};
protoOf(JsonTreeListEncoder).h1n = function (key, element) {
  var idx = toInt(key);
  this.z1o_1.k2(idx, element);
};
protoOf(JsonTreeListEncoder).i1n = function () {
  return new JsonArray(this.z1o_1);
};
function _get_tag__e6h4qf($this) {
  var tmp = $this.k1o_1;
  if (!(tmp == null))
    return tmp;
  else {
    throwUninitializedPropertyAccessException('tag');
  }
}
function JsonTreeMapEncoder(json, nodeConsumer) {
  JsonTreeEncoder.call(this, json, nodeConsumer);
  this.l1o_1 = true;
}
protoOf(JsonTreeMapEncoder).h1n = function (key, element) {
  if (this.l1o_1) {
    var tmp = this;
    var tmp_0;
    if (element instanceof JsonPrimitive) {
      tmp_0 = element.l1e();
    } else {
      if (element instanceof JsonObject) {
        throw InvalidKeyKindException(JsonObjectSerializer_getInstance().b1f_1);
      } else {
        if (element instanceof JsonArray) {
          throw InvalidKeyKindException(JsonArraySerializer_getInstance().c1f_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    tmp.k1o_1 = tmp_0;
    this.l1o_1 = false;
  } else {
    var tmp0 = this.g1n_1;
    // Inline function 'kotlin.collections.set' call
    var key_0 = _get_tag__e6h4qf(this);
    tmp0.u2(key_0, element);
    this.l1o_1 = true;
  }
};
protoOf(JsonTreeMapEncoder).i1n = function () {
  return new JsonObject(this.g1n_1);
};
function writeJson$lambda($result) {
  return function (it) {
    $result._v = it;
    return Unit_instance;
  };
}
var WriteMode_OBJ_instance;
var WriteMode_LIST_instance;
var WriteMode_MAP_instance;
var WriteMode_POLY_OBJ_instance;
function values() {
  return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
}
function get_entries() {
  if ($ENTRIES == null)
    $ENTRIES = enumEntries(values());
  return $ENTRIES;
}
var WriteMode_entriesInitialized;
function WriteMode_initEntries() {
  if (WriteMode_entriesInitialized)
    return Unit_instance;
  WriteMode_entriesInitialized = true;
  WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
  WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
}
var $ENTRIES;
function WriteMode(name, ordinal, begin, end) {
  Enum.call(this, name, ordinal);
  this.d1k_1 = begin;
  this.e1k_1 = end;
}
function switchMode(_this__u8e3s4, desc) {
  var tmp0_subject = desc.ks();
  var tmp;
  if (tmp0_subject instanceof PolymorphicKind) {
    tmp = WriteMode_POLY_OBJ_getInstance();
  } else {
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = WriteMode_LIST_getInstance();
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var keyDescriptor = carrierDescriptor(desc.rs(0), _this__u8e3s4.vu());
        var keyKind = keyDescriptor.ks();
        var tmp_0;
        var tmp_1;
        if (keyKind instanceof PrimitiveKind) {
          tmp_1 = true;
        } else {
          tmp_1 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_1) {
          tmp_0 = WriteMode_MAP_getInstance();
        } else {
          if (_this__u8e3s4.b1c_1.q1d_1) {
            tmp_0 = WriteMode_LIST_getInstance();
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_0;
      } else {
        tmp = WriteMode_OBJ_getInstance();
      }
    }
  }
  return tmp;
}
function carrierDescriptor(_this__u8e3s4, module_0) {
  var tmp;
  if (equals(_this__u8e3s4.ks(), CONTEXTUAL_getInstance())) {
    var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
    tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  } else if (_this__u8e3s4.ls()) {
    tmp = carrierDescriptor(_this__u8e3s4.rs(0), module_0);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function WriteMode_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_OBJ_instance;
}
function WriteMode_LIST_getInstance() {
  WriteMode_initEntries();
  return WriteMode_LIST_instance;
}
function WriteMode_MAP_getInstance() {
  WriteMode_initEntries();
  return WriteMode_MAP_instance;
}
function WriteMode_POLY_OBJ_getInstance() {
  WriteMode_initEntries();
  return WriteMode_POLY_OBJ_instance;
}
function appendEscape($this, lastPosition, current) {
  $this.a1p(lastPosition, current);
  return appendEsc($this, current + 1 | 0);
}
function decodedString($this, lastPosition, currentPosition) {
  $this.a1p(lastPosition, currentPosition);
  var result = $this.s1c_1.toString();
  $this.s1c_1.ad(0);
  return result;
}
function takePeeked($this) {
  // Inline function 'kotlin.also' call
  var this_0 = ensureNotNull($this.r1c_1);
  $this.r1c_1 = null;
  return this_0;
}
function wasUnquotedString($this) {
  return !(charSequenceGet($this.b1p(), $this.p1c_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
}
function appendEsc($this, startPosition) {
  var currentPosition = startPosition;
  currentPosition = $this.c1p(currentPosition);
  if (currentPosition === -1) {
    $this.z1g('Expected escape sequence to continue, got EOF');
  }
  var tmp = $this.b1p();
  var _unary__edvuaz = currentPosition;
  currentPosition = _unary__edvuaz + 1 | 0;
  var currentChar = charSequenceGet(tmp, _unary__edvuaz);
  if (currentChar === _Char___init__impl__6a9atx(117)) {
    return appendHex($this, $this.b1p(), currentPosition);
  }
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
  var c = escapeToChar(tmp$ret$0);
  if (c === _Char___init__impl__6a9atx(0)) {
    $this.z1g("Invalid escaped char '" + toString_1(currentChar) + "'");
  }
  $this.s1c_1.k9(c);
  return currentPosition;
}
function appendHex($this, source, startPos) {
  if ((startPos + 4 | 0) >= charSequenceLength(source)) {
    $this.p1c_1 = startPos;
    $this.d1p();
    if (($this.p1c_1 + 4 | 0) >= charSequenceLength(source)) {
      $this.z1g('Unexpected EOF during unicode escape');
    }
    return appendHex($this, source, $this.p1c_1);
  }
  $this.s1c_1.k9(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
  return startPos + 4 | 0;
}
function fromHexChar($this, source, currentPosition) {
  var character = charSequenceGet(source, currentPosition);
  var tmp;
  if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
    // Inline function 'kotlin.code' call
    var tmp_0 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(48);
    tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
  } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
    // Inline function 'kotlin.code' call
    var tmp_1 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(97);
    tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
  } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
    // Inline function 'kotlin.code' call
    var tmp_2 = Char__toInt_impl_vasixd(character);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(65);
    tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
  } else {
    $this.z1g("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
  }
  return tmp;
}
function consumeBoolean2($this, start) {
  var current = $this.c1p(start);
  if (current >= charSequenceLength($this.b1p()) || current === -1) {
    $this.z1g('EOF');
  }
  var tmp = $this.b1p();
  var _unary__edvuaz = current;
  current = _unary__edvuaz + 1 | 0;
  // Inline function 'kotlin.code' call
  var this_0 = charSequenceGet(tmp, _unary__edvuaz);
  var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
  var tmp_0;
  // Inline function 'kotlin.code' call
  var this_1 = _Char___init__impl__6a9atx(116);
  if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
    consumeBooleanLiteral($this, 'rue', current);
    tmp_0 = true;
  } else {
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(102);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
      consumeBooleanLiteral($this, 'alse', current);
      tmp_0 = false;
    } else {
      $this.z1g("Expected valid boolean literal prefix, but had '" + $this.h1i() + "'");
    }
  }
  return tmp_0;
}
function consumeBooleanLiteral($this, literalSuffix, current) {
  if ((charSequenceLength($this.b1p()) - current | 0) < literalSuffix.length) {
    $this.z1g('Unexpected end of boolean literal');
  }
  var inductionVariable = 0;
  var last = charSequenceLength(literalSuffix) - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var expected = charCodeAt(literalSuffix, i);
      var actual = charSequenceGet($this.b1p(), current + i | 0);
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(expected);
      // Inline function 'kotlin.code' call
      if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
        $this.z1g("Expected valid boolean literal prefix, but had '" + $this.h1i() + "'");
      }
    }
     while (inductionVariable <= last);
  $this.p1c_1 = current + literalSuffix.length | 0;
}
function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
  var tmp;
  switch (isExponentPositive) {
    case false:
      // Inline function 'kotlin.math.pow' call

      var x = -exponentAccumulator.x3();
      tmp = Math.pow(10.0, x);
      break;
    case true:
      // Inline function 'kotlin.math.pow' call

      var x_0 = exponentAccumulator.x3();
      tmp = Math.pow(10.0, x_0);
      break;
    default:
      noWhenBranchMatchedException();
      break;
  }
  return tmp;
}
function AbstractJsonLexer() {
  this.p1c_1 = 0;
  this.q1c_1 = new JsonPath();
  this.r1c_1 = null;
  this.s1c_1 = StringBuilder_init_$Create$();
}
protoOf(AbstractJsonLexer).d1p = function () {
};
protoOf(AbstractJsonLexer).t1j = function () {
  var current = this.e1p();
  var source = this.b1p();
  if (current >= charSequenceLength(source) || current === -1)
    return false;
  if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
    this.p1c_1 = this.p1c_1 + 1 | 0;
    return true;
  }
  return false;
};
protoOf(AbstractJsonLexer).f1p = function (c) {
  return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
};
protoOf(AbstractJsonLexer).t1c = function () {
  var nextToken = this.j1i();
  if (!(nextToken === 10)) {
    this.z1g('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.b1p(), this.p1c_1 - 1 | 0)) + ' instead');
  }
};
protoOf(AbstractJsonLexer).d1i = function (expected) {
  var token = this.j1i();
  if (!(token === expected)) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expected_0 = tokenDescription(expected);
    var position = true ? this.p1c_1 - 1 | 0 : this.p1c_1;
    var s = this.p1c_1 === charSequenceLength(this.b1p()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.b1p(), position));
    var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.z1g(tmp$ret$0, position);
  }
  return token;
};
protoOf(AbstractJsonLexer).g1p = function (expected) {
  if (this.p1c_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
      var snapshot = this.p1c_1;
      try {
        this.p1c_1 = this.p1c_1 - 1 | 0;
        tmp$ret$1 = this.h1i();
        break $l$block;
      }finally {
        this.p1c_1 = snapshot;
      }
    }
    var inputLiteral = tmp$ret$1;
    if (inputLiteral === 'null') {
      this.y1g("Expected string literal but 'null' literal was found", this.p1c_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
    }
  }
  // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
  var expectedToken = charToTokenClass(expected);
  var expected_0 = tokenDescription(expectedToken);
  var position = true ? this.p1c_1 - 1 | 0 : this.p1c_1;
  var s = this.p1c_1 === charSequenceLength(this.b1p()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.b1p(), position));
  var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
  this.z1g(tmp$ret$2, position);
};
protoOf(AbstractJsonLexer).e1i = function () {
  var source = this.b1p();
  var cpos = this.p1c_1;
  $l$loop_0: while (true) {
    cpos = this.c1p(cpos);
    if (cpos === -1)
      break $l$loop_0;
    var ch = charSequenceGet(source, cpos);
    if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
      cpos = cpos + 1 | 0;
      continue $l$loop_0;
    }
    this.p1c_1 = cpos;
    return charToTokenClass(ch);
  }
  this.p1c_1 = cpos;
  return 10;
};
protoOf(AbstractJsonLexer).u1j = function (doConsume) {
  var current = this.e1p();
  current = this.c1p(current);
  var len = charSequenceLength(this.b1p()) - current | 0;
  if (len < 4 || current === -1)
    return false;
  var inductionVariable = 0;
  if (inductionVariable <= 3)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (!(charCodeAt('null', i) === charSequenceGet(this.b1p(), current + i | 0)))
        return false;
    }
     while (inductionVariable <= 3);
  if (len > 4 && charToTokenClass(charSequenceGet(this.b1p(), current + 4 | 0)) === 0)
    return false;
  if (doConsume) {
    this.p1c_1 = current + 4 | 0;
  }
  return true;
};
protoOf(AbstractJsonLexer).f1k = function (doConsume, $super) {
  doConsume = doConsume === VOID ? true : doConsume;
  return $super === VOID ? this.u1j(doConsume) : $super.u1j.call(this, doConsume);
};
protoOf(AbstractJsonLexer).v1j = function (isLenient) {
  var token = this.e1i();
  var tmp;
  if (isLenient) {
    if (!(token === 1) && !(token === 0))
      return null;
    tmp = this.h1i();
  } else {
    if (!(token === 1))
      return null;
    tmp = this.g1i();
  }
  var string = tmp;
  this.r1c_1 = string;
  return string;
};
protoOf(AbstractJsonLexer).h1p = function () {
  this.r1c_1 = null;
};
protoOf(AbstractJsonLexer).i1p = function (startPos, endPos) {
  // Inline function 'kotlin.text.substring' call
  var this_0 = this.b1p();
  return toString(charSequenceSubSequence(this_0, startPos, endPos));
};
protoOf(AbstractJsonLexer).g1i = function () {
  if (!(this.r1c_1 == null)) {
    return takePeeked(this);
  }
  return this.y1j();
};
protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
  var currentPosition = current;
  var lastPosition = startPosition;
  var char = charSequenceGet(source, currentPosition);
  var usedAppend = false;
  while (!(char === _Char___init__impl__6a9atx(34))) {
    if (char === _Char___init__impl__6a9atx(92)) {
      usedAppend = true;
      currentPosition = this.c1p(appendEscape(this, lastPosition, currentPosition));
      if (currentPosition === -1) {
        this.z1g('Unexpected EOF', currentPosition);
      }
      lastPosition = currentPosition;
    } else {
      currentPosition = currentPosition + 1 | 0;
      if (currentPosition >= charSequenceLength(source)) {
        usedAppend = true;
        this.a1p(lastPosition, currentPosition);
        currentPosition = this.c1p(currentPosition);
        if (currentPosition === -1) {
          this.z1g('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      }
    }
    char = charSequenceGet(source, currentPosition);
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.i1p(lastPosition, currentPosition);
  } else {
    tmp = decodedString(this, lastPosition, currentPosition);
  }
  var string = tmp;
  this.p1c_1 = currentPosition + 1 | 0;
  return string;
};
protoOf(AbstractJsonLexer).z1j = function () {
  var result = this.h1i();
  if (result === 'null' && wasUnquotedString(this)) {
    this.z1g("Unexpected 'null' value instead of string literal");
  }
  return result;
};
protoOf(AbstractJsonLexer).h1i = function () {
  if (!(this.r1c_1 == null)) {
    return takePeeked(this);
  }
  var current = this.e1p();
  if (current >= charSequenceLength(this.b1p()) || current === -1) {
    this.z1g('EOF', current);
  }
  var token = charToTokenClass(charSequenceGet(this.b1p(), current));
  if (token === 1) {
    return this.g1i();
  }
  if (!(token === 0)) {
    this.z1g('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.b1p(), current)));
  }
  var usedAppend = false;
  while (charToTokenClass(charSequenceGet(this.b1p(), current)) === 0) {
    current = current + 1 | 0;
    if (current >= charSequenceLength(this.b1p())) {
      usedAppend = true;
      this.a1p(this.p1c_1, current);
      var eof = this.c1p(current);
      if (eof === -1) {
        this.p1c_1 = current;
        return decodedString(this, 0, 0);
      } else {
        current = eof;
      }
    }
  }
  var tmp;
  if (!usedAppend) {
    tmp = this.i1p(this.p1c_1, current);
  } else {
    tmp = decodedString(this, this.p1c_1, current);
  }
  var result = tmp;
  this.p1c_1 = current;
  return result;
};
protoOf(AbstractJsonLexer).a1p = function (fromIndex, toIndex) {
  this.s1c_1.uc(this.b1p(), fromIndex, toIndex);
};
protoOf(AbstractJsonLexer).x1j = function (allowLenientStrings) {
  // Inline function 'kotlin.collections.mutableListOf' call
  var tokenStack = ArrayList_init_$Create$();
  var lastToken = this.e1i();
  if (!(lastToken === 8) && !(lastToken === 6)) {
    this.h1i();
    return Unit_instance;
  }
  $l$loop: while (true) {
    lastToken = this.e1i();
    if (lastToken === 1) {
      if (allowLenientStrings)
        this.h1i();
      else
        this.y1j();
      continue $l$loop;
    }
    var tmp0_subject = lastToken;
    if (tmp0_subject === 8 || tmp0_subject === 6) {
      tokenStack.e(lastToken);
    } else if (tmp0_subject === 9) {
      if (!(last(tokenStack) === 8))
        throw JsonDecodingException_0(this.p1c_1, 'found ] instead of } at path: ' + this.q1c_1.toString(), this.b1p());
      removeLast(tokenStack);
    } else if (tmp0_subject === 7) {
      if (!(last(tokenStack) === 6))
        throw JsonDecodingException_0(this.p1c_1, 'found } instead of ] at path: ' + this.q1c_1.toString(), this.b1p());
      removeLast(tokenStack);
    } else if (tmp0_subject === 10) {
      this.z1g('Unexpected end of input due to malformed JSON during ignoring unknown keys');
    }
    this.j1i();
    if (tokenStack.j() === 0)
      return Unit_instance;
  }
};
protoOf(AbstractJsonLexer).toString = function () {
  return "JsonReader(source='" + toString(this.b1p()) + "', currentPosition=" + this.p1c_1 + ')';
};
protoOf(AbstractJsonLexer).w1j = function (key) {
  var processed = this.i1p(0, this.p1c_1);
  var lastIndexOf_0 = lastIndexOf(processed, key);
  throw new JsonDecodingException("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.q1c_1.m1h() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.b1p(), lastIndexOf_0))));
};
protoOf(AbstractJsonLexer).y1g = function (message, position, hint) {
  var tmp;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(hint) === 0) {
    tmp = '';
  } else {
    tmp = '\n' + hint;
  }
  var hintMessage = tmp;
  throw JsonDecodingException_0(position, message + ' at path: ' + this.q1c_1.m1h() + hintMessage, this.b1p());
};
protoOf(AbstractJsonLexer).z1g = function (message, position, hint, $super) {
  position = position === VOID ? this.p1c_1 : position;
  hint = hint === VOID ? '' : hint;
  return $super === VOID ? this.y1g(message, position, hint) : $super.y1g.call(this, message, position, hint);
};
protoOf(AbstractJsonLexer).h1k = function () {
  var current = this.e1p();
  current = this.c1p(current);
  if (current >= charSequenceLength(this.b1p()) || current === -1) {
    this.z1g('EOF');
  }
  var tmp;
  if (charSequenceGet(this.b1p(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    if (current === charSequenceLength(this.b1p())) {
      this.z1g('EOF');
    }
    tmp = true;
  } else {
    tmp = false;
  }
  var hasQuotation = tmp;
  var accumulator = new Long(0, 0);
  var exponentAccumulator = new Long(0, 0);
  var isNegative = false;
  var isExponentPositive = false;
  var hasExponent = false;
  var start = current;
  $l$loop_4: while (!(current === charSequenceLength(this.b1p()))) {
    var ch = charSequenceGet(this.b1p(), current);
    if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
      if (current === start) {
        this.z1g('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
      }
      isExponentPositive = true;
      hasExponent = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
      if (current === start) {
        this.z1g("Unexpected symbol '-' in numeric literal");
      }
      isExponentPositive = false;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
      if (current === start) {
        this.z1g("Unexpected symbol '+' in numeric literal");
      }
      isExponentPositive = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    if (ch === _Char___init__impl__6a9atx(45)) {
      if (!(current === start)) {
        this.z1g("Unexpected symbol '-' in numeric literal");
      }
      isNegative = true;
      current = current + 1 | 0;
      continue $l$loop_4;
    }
    var token = charToTokenClass(ch);
    if (!(token === 0))
      break $l$loop_4;
    current = current + 1 | 0;
    var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
    if (!(0 <= digit ? digit <= 9 : false)) {
      this.z1g("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
    }
    if (hasExponent) {
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.plus' call
      exponentAccumulator = exponentAccumulator.i3(toLong(10)).g3(toLong(digit));
      continue $l$loop_4;
    }
    // Inline function 'kotlin.Long.times' call
    // Inline function 'kotlin.Long.minus' call
    accumulator = accumulator.i3(toLong(10)).h3(toLong(digit));
    if (accumulator.a1(new Long(0, 0)) > 0) {
      this.z1g('Numeric value overflow');
    }
  }
  var hasChars = !(current === start);
  if (start === current || (isNegative && start === (current - 1 | 0))) {
    this.z1g('Expected numeric literal');
  }
  if (hasQuotation) {
    if (!hasChars) {
      this.z1g('EOF');
    }
    if (!(charSequenceGet(this.b1p(), current) === _Char___init__impl__6a9atx(34))) {
      this.z1g('Expected closing quotation mark');
    }
    current = current + 1 | 0;
  }
  this.p1c_1 = current;
  if (hasExponent) {
    var doubleAccumulator = accumulator.x3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
    if (doubleAccumulator > (new Long(-1, 2147483647)).x3() || doubleAccumulator < (new Long(0, -2147483648)).x3()) {
      this.z1g('Numeric value overflow');
    }
    // Inline function 'kotlin.math.floor' call
    if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
      this.z1g("Can't convert " + doubleAccumulator + ' to Long');
    }
    accumulator = numberToLong(doubleAccumulator);
  }
  var tmp_0;
  if (isNegative) {
    tmp_0 = accumulator;
  } else if (!accumulator.equals(new Long(0, -2147483648))) {
    tmp_0 = accumulator.n3();
  } else {
    this.z1g('Numeric value overflow');
  }
  return tmp_0;
};
protoOf(AbstractJsonLexer).v1e = function () {
  var result = this.h1k();
  var next = this.j1i();
  if (!(next === 10)) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expected = tokenDescription(10);
    var position = true ? this.p1c_1 - 1 | 0 : this.p1c_1;
    var s = this.p1c_1 === charSequenceLength(this.b1p()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.b1p(), position));
    var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
    this.z1g(tmp$ret$0, position);
  }
  return result;
};
protoOf(AbstractJsonLexer).g1k = function () {
  var current = this.e1p();
  if (current === charSequenceLength(this.b1p())) {
    this.z1g('EOF');
  }
  var tmp;
  if (charSequenceGet(this.b1p(), current) === _Char___init__impl__6a9atx(34)) {
    current = current + 1 | 0;
    tmp = true;
  } else {
    tmp = false;
  }
  var hasQuotation = tmp;
  var result = consumeBoolean2(this, current);
  if (hasQuotation) {
    if (this.p1c_1 === charSequenceLength(this.b1p())) {
      this.z1g('EOF');
    }
    if (!(charSequenceGet(this.b1p(), this.p1c_1) === _Char___init__impl__6a9atx(34))) {
      this.z1g('Expected closing quotation mark');
    }
    this.p1c_1 = this.p1c_1 + 1 | 0;
  }
  return result;
};
function charToTokenClass(c) {
  var tmp;
  // Inline function 'kotlin.code' call
  if (Char__toInt_impl_vasixd(c) < 126) {
    var tmp_0 = CharMappings_getInstance().k1p_1;
    // Inline function 'kotlin.code' call
    tmp = tmp_0[Char__toInt_impl_vasixd(c)];
  } else {
    tmp = 0;
  }
  return tmp;
}
function tokenDescription(token) {
  return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
}
function escapeToChar(c) {
  return c < 117 ? CharMappings_getInstance().j1p_1[c] : _Char___init__impl__6a9atx(0);
}
function initEscape($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 31)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2ESC($this, i, _Char___init__impl__6a9atx(117));
    }
     while (inductionVariable <= 31);
  initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
  initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
  initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
  initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
  initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
  initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
  initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
  initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
}
function initCharToToken($this) {
  var inductionVariable = 0;
  if (inductionVariable <= 32)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      initC2TC($this, i, 127);
    }
     while (inductionVariable <= 32);
  initC2TC($this, 9, 3);
  initC2TC($this, 10, 3);
  initC2TC($this, 13, 3);
  initC2TC($this, 32, 3);
  initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
  initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
  initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
  initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
  initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
  initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
  initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
  initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
}
function initC2ESC($this, c, esc) {
  if (!(esc === _Char___init__impl__6a9atx(117))) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
    $this.j1p_1[tmp$ret$0] = numberToChar(c);
  }
}
function initC2ESC_0($this, c, esc) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2ESC($this, tmp$ret$0, esc);
}
function initC2TC($this, c, cl) {
  $this.k1p_1[c] = cl;
}
function initC2TC_0($this, c, cl) {
  // Inline function 'kotlin.code' call
  var tmp$ret$0 = Char__toInt_impl_vasixd(c);
  return initC2TC($this, tmp$ret$0, cl);
}
function CharMappings() {
  CharMappings_instance = this;
  this.j1p_1 = charArray(117);
  this.k1p_1 = new Int8Array(126);
  initEscape(this);
  initCharToToken(this);
}
var CharMappings_instance;
function CharMappings_getInstance() {
  if (CharMappings_instance == null)
    new CharMappings();
  return CharMappings_instance;
}
function StringJsonLexerWithComments(source) {
  StringJsonLexer.call(this, source);
}
protoOf(StringJsonLexerWithComments).j1i = function () {
  var source = this.b1p();
  var cpos = this.e1p();
  if (cpos >= source.length || cpos === -1)
    return 10;
  this.p1c_1 = cpos + 1 | 0;
  return charToTokenClass(charCodeAt(source, cpos));
};
protoOf(StringJsonLexerWithComments).f1i = function () {
  var current = this.e1p();
  if (current >= this.b1p().length || current === -1)
    return false;
  return this.f1p(charCodeAt(this.b1p(), current));
};
protoOf(StringJsonLexerWithComments).s1j = function (expected) {
  var source = this.b1p();
  var current = this.e1p();
  if (current >= source.length || current === -1) {
    this.p1c_1 = -1;
    this.g1p(expected);
  }
  var c = charCodeAt(source, current);
  this.p1c_1 = current + 1 | 0;
  if (c === expected)
    return Unit_instance;
  else {
    this.g1p(expected);
  }
};
protoOf(StringJsonLexerWithComments).e1i = function () {
  var source = this.b1p();
  var cpos = this.e1p();
  if (cpos >= source.length || cpos === -1)
    return 10;
  this.p1c_1 = cpos;
  return charToTokenClass(charCodeAt(source, cpos));
};
protoOf(StringJsonLexerWithComments).e1p = function () {
  var current = this.p1c_1;
  if (current === -1)
    return current;
  var source = this.b1p();
  $l$loop_1: while (current < source.length) {
    var c = charCodeAt(source, current);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
      continue $l$loop_1;
    }
    if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
      var tmp0_subject = charCodeAt(source, current + 1 | 0);
      if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
        current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
        if (current === -1) {
          current = source.length;
        } else {
          current = current + 1 | 0;
        }
        continue $l$loop_1;
      } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
        current = indexOf(source, '*/', current + 2 | 0);
        if (current === -1) {
          this.p1c_1 = source.length;
          this.z1g('Expected end of the block comment: "*/", but had EOF instead');
        } else {
          current = current + 2 | 0;
        }
        continue $l$loop_1;
      }
    }
    break $l$loop_1;
  }
  this.p1c_1 = current;
  return current;
};
function StringJsonLexer(source) {
  AbstractJsonLexer.call(this);
  this.u1p_1 = source;
}
protoOf(StringJsonLexer).b1p = function () {
  return this.u1p_1;
};
protoOf(StringJsonLexer).c1p = function (position) {
  return position < this.b1p().length ? position : -1;
};
protoOf(StringJsonLexer).j1i = function () {
  var source = this.b1p();
  var cpos = this.p1c_1;
  $l$loop: while (!(cpos === -1) && cpos < source.length) {
    var _unary__edvuaz = cpos;
    cpos = _unary__edvuaz + 1 | 0;
    var c = charCodeAt(source, _unary__edvuaz);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop;
    this.p1c_1 = cpos;
    return charToTokenClass(c);
  }
  this.p1c_1 = source.length;
  return 10;
};
protoOf(StringJsonLexer).f1i = function () {
  var current = this.p1c_1;
  if (current === -1)
    return false;
  var source = this.b1p();
  $l$loop: while (current < source.length) {
    var c = charCodeAt(source, current);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
      continue $l$loop;
    }
    this.p1c_1 = current;
    return this.f1p(c);
  }
  this.p1c_1 = current;
  return false;
};
protoOf(StringJsonLexer).e1p = function () {
  var current = this.p1c_1;
  if (current === -1)
    return current;
  var source = this.b1p();
  $l$loop: while (current < source.length) {
    var c = charCodeAt(source, current);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
      current = current + 1 | 0;
    } else {
      break $l$loop;
    }
  }
  this.p1c_1 = current;
  return current;
};
protoOf(StringJsonLexer).s1j = function (expected) {
  if (this.p1c_1 === -1) {
    this.g1p(expected);
  }
  var source = this.b1p();
  var cpos = this.p1c_1;
  $l$loop: while (cpos < source.length) {
    var _unary__edvuaz = cpos;
    cpos = _unary__edvuaz + 1 | 0;
    var c = charCodeAt(source, _unary__edvuaz);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
    if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
      continue $l$loop;
    this.p1c_1 = cpos;
    if (c === expected)
      return Unit_instance;
    this.g1p(expected);
  }
  this.p1c_1 = -1;
  this.g1p(expected);
};
protoOf(StringJsonLexer).y1j = function () {
  this.s1j(_Char___init__impl__6a9atx(34));
  var current = this.p1c_1;
  var closingQuote = indexOf_0(this.b1p(), _Char___init__impl__6a9atx(34), current);
  if (closingQuote === -1) {
    this.h1i();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expected = tokenDescription(1);
    var position = false ? this.p1c_1 - 1 | 0 : this.p1c_1;
    var s = this.p1c_1 === charSequenceLength(this.b1p()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.b1p(), position));
    var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
    this.z1g(tmp$ret$0, position);
  }
  var inductionVariable = current;
  if (inductionVariable < closingQuote)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (charCodeAt(this.b1p(), i) === _Char___init__impl__6a9atx(92)) {
        return this.consumeString2(this.b1p(), this.p1c_1, i);
      }
    }
     while (inductionVariable < closingQuote);
  this.p1c_1 = closingQuote + 1 | 0;
  return substring(this.b1p(), current, closingQuote);
};
protoOf(StringJsonLexer).a1k = function (keyToMatch, isLenient) {
  var positionSnapshot = this.p1c_1;
  try {
    if (!(this.j1i() === 6))
      return null;
    var firstKey = this.v1j(isLenient);
    if (!(firstKey === keyToMatch))
      return null;
    this.h1p();
    if (!(this.j1i() === 5))
      return null;
    return this.v1j(isLenient);
  }finally {
    this.p1c_1 = positionSnapshot;
    this.h1p();
  }
};
function StringJsonLexer_0(json, source) {
  return !json.b1c_1.c1e_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
}
function get_schemaCache(_this__u8e3s4) {
  return _this__u8e3s4.d1c_1;
}
function createMapForCache(initialCapacity) {
  return HashMap_init_$Create$(initialCapacity);
}
//region block: post-declaration
protoOf(defer$1).fs = get_isNullable;
protoOf(defer$1).ls = get_isInline;
protoOf(defer$1).ns = get_annotations;
protoOf(JsonSerializersModuleValidator).u1b = contextual;
//endregion
//region block: init
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
Companion_instance_2 = new Companion_2();
Tombstone_instance = new Tombstone();
Companion_instance_3 = new Companion_3();
//endregion
//region block: exports
export {
  Companion_instance_3 as Companion_instance1lcsd7h1e6cgu,
  Default_getInstance as Default_getInstance363hicrc7jsft,
  get_ESCAPE_STRINGS as get_ESCAPE_STRINGS1nxou3xdkbswr,
  encodeByWriter as encodeByWriter108llwage8l5s,
  JsonArray as JsonArray2urf8ey7u44sd,
  JsonNull as JsonNull2liwjj96vm0w2,
  JsonObjectBuilder as JsonObjectBuilder2nl6rv6vdayuk,
  JsonObject as JsonObjectee06ihoeeiqj,
  JsonPrimitive_2 as JsonPrimitiveolttw629wj53,
  JsonPrimitive_0 as JsonPrimitive2fp8648nd60dn,
  JsonPrimitive_1 as JsonPrimitive1xkjzc5d7ihuv,
  JsonPrimitive as JsonPrimitive3ttzjh2ft5dnx,
  JsonUnquotedLiteral as JsonUnquotedLiteralbxup6cnomek2,
  Json_0 as Jsonsmkyu9xjl7fv,
  get_boolean as get_boolean37ml8jnzy6rg3,
  get_int as get_int2y6jf75ftml0w,
  get_jsonObject as get_jsonObject2u4z2ch1uuca9,
};
//endregion

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.mjs.map
