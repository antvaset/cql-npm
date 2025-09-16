import { Companion_getInstance39implybictlf as Companion_getInstance } from './KotlinBigInteger-bignum.mjs';
import {
  protoOf180f3jzyo7rfj as protoOf,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  getStringHashCode26igk1bx568vk as getStringHashCode,
  indexOfwa4w6635jewi as indexOf,
  toString1pkumu07cwy4m as toString,
  IllegalArgumentException_init_$Create$3ewkh27kzt8z8 as IllegalArgumentException_init_$Create$,
  Unit_instance1fbcbse1fwigr as Unit_instance,
  substringiqarkczpya5m as substring,
  substring3saq8ornu0luv as substring_0,
  startsWith26w8qjqapeeq6 as startsWith,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  VOID3gxj6tk5isa35 as VOID,
  hashCodeq5arwsb9dgti as hashCode,
  equals2au1ep9vhcato as equals,
  split2bvyvnrlcifjv as split,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$3bxttkj3v1mea as ArrayList_init_$Create$,
  StringBuilder_init_$Create$2qsge4ydj6bin as StringBuilder_init_$Create$,
  to2cs3ny02qtbcb as to,
  toMap1vec9topfei08 as toMap,
  plus2m1vv33moko5t as plus,
  noWhenBranchMatchedException2a6r7ubxgky5j as noWhenBranchMatchedException,
  replace3le3ie7l9k8aq as replace,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  ArrayList_init_$Create$149jv2ovkkvnt as ArrayList_init_$Create$_0,
  LinkedHashMap_init_$Create$1f9mb1z5f3dxn as LinkedHashMap_init_$Create$,
  emptyMapr06gerzljqtm as emptyMap,
  mutableListOf6oorvk2mtdmp as mutableListOf,
  Exception_init_$Create$becl18oowirz as Exception_init_$Create$,
  last1vo29oleiqj36 as last,
  createMapFrom2ixxr6kgkwbxt as createMapFrom,
  substringBeforekje8w2lxhyb6 as substringBefore,
} from './kotlin-kotlin-stdlib.mjs';
import * as org_cqframework_cql_shared_serializing_Saxes_l1eb5i from 'saxes';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForClass(BigDecimalJs, 'BigDecimalJs');
initMetadataForClass(QNameJs, 'QNameJs');
initMetadataForClass(XmlNode, 'XmlNode');
initMetadataForClass(Text, 'Text', VOID, XmlNode);
initMetadataForClass(Element_0, 'Element', VOID, XmlNode);
initMetadataForClass(MutableXmlNode, 'MutableXmlNode');
initMetadataForClass(Text_0, 'Text', VOID, MutableXmlNode);
initMetadataForClass(Element_1, 'Element', VOID, MutableXmlNode);
//endregion
function BigDecimalJs_init_$Init$(value, $this) {
  BigDecimalJs.call($this);
  $this.j21_1 = Companion_getInstance().h1u(value);
  return $this;
}
function BigDecimalJs_init_$Create$(value) {
  return BigDecimalJs_init_$Init$(value, objectCreate(protoOf(BigDecimalJs)));
}
protoOf(BigDecimalJs).k1v = function () {
  return this.j21_1.k1v();
};
function BigDecimalJs() {
}
function QNameJs_init_$Init$(namespaceURI, localPart, $this) {
  QNameJs.call($this, namespaceURI, localPart, '');
  return $this;
}
function QNameJs_init_$Create$(namespaceURI, localPart) {
  return QNameJs_init_$Init$(namespaceURI, localPart, objectCreate(protoOf(QNameJs)));
}
function QNameJs_init_$Init$_0(localPart, $this) {
  QNameJs.call($this, '', localPart, '');
  return $this;
}
function QNameJs_init_$Create$_0(localPart) {
  return QNameJs_init_$Init$_0(localPart, objectCreate(protoOf(QNameJs)));
}
function QNameJs(namespaceURI, localPart, prefix) {
  this.k21_1 = namespaceURI;
  this.l21_1 = localPart;
  this.m21_1 = prefix;
}
protoOf(QNameJs).n21 = function () {
  return this.l21_1;
};
protoOf(QNameJs).o21 = function () {
  return this.k21_1;
};
protoOf(QNameJs).toString = function () {
  if (this.k21_1 === '')
    return this.l21_1;
  return '{' + this.k21_1 + '}' + this.l21_1;
};
protoOf(QNameJs).equals = function (other) {
  if (this === other)
    return true;
  if (other instanceof QNameJs) {
    if (!(this.k21_1 === other.k21_1))
      return false;
    if (!(this.l21_1 === other.l21_1))
      return false;
    return true;
  }
  return false;
};
protoOf(QNameJs).hashCode = function () {
  var result = getStringHashCode(this.k21_1);
  result = imul(31, result) + getStringHashCode(this.l21_1) | 0;
  return result;
};
function jsonStringToQName(value) {
  if (startsWith(value, '{')) {
    var endIndex = indexOf(value, '}');
    // Inline function 'kotlin.require' call
    if (!!(endIndex === -1)) {
      var message = 'Invalid QName format: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var namespaceURI = substring(value, 1, endIndex);
    var localPart = substring_0(value, endIndex + 1 | 0);
    return QNameJs_init_$Create$(namespaceURI, localPart);
  }
  return QNameJs_init_$Create$_0(value);
}
function Text(text) {
  XmlNode.call(this);
  this.p21_1 = text;
}
protoOf(Text).toString = function () {
  return 'Text(text=' + this.p21_1 + ')';
};
protoOf(Text).hashCode = function () {
  return getStringHashCode(this.p21_1);
};
protoOf(Text).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Text))
    return false;
  var tmp0_other_with_cast = other instanceof Text ? other : THROW_CCE();
  if (!(this.p21_1 === tmp0_other_with_cast.p21_1))
    return false;
  return true;
};
function Element_0(tagName, attributes, children) {
  XmlNode.call(this);
  this.q21_1 = tagName;
  this.r21_1 = attributes;
  this.s21_1 = children;
}
protoOf(Element_0).t21 = function (tagName, attributes, children) {
  return new Element_0(tagName, attributes, children);
};
protoOf(Element_0).u21 = function (tagName, attributes, children, $super) {
  tagName = tagName === VOID ? this.q21_1 : tagName;
  attributes = attributes === VOID ? this.r21_1 : attributes;
  children = children === VOID ? this.s21_1 : children;
  return $super === VOID ? this.t21(tagName, attributes, children) : $super.t21.call(this, tagName, attributes, children);
};
protoOf(Element_0).toString = function () {
  return 'Element(tagName=' + this.q21_1 + ', attributes=' + toString(this.r21_1) + ', children=' + toString(this.s21_1) + ')';
};
protoOf(Element_0).hashCode = function () {
  var result = getStringHashCode(this.q21_1);
  result = imul(result, 31) + hashCode(this.r21_1) | 0;
  result = imul(result, 31) + hashCode(this.s21_1) | 0;
  return result;
};
protoOf(Element_0).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Element_0))
    return false;
  var tmp0_other_with_cast = other instanceof Element_0 ? other : THROW_CCE();
  if (!(this.q21_1 === tmp0_other_with_cast.q21_1))
    return false;
  if (!equals(this.r21_1, tmp0_other_with_cast.r21_1))
    return false;
  if (!equals(this.s21_1, tmp0_other_with_cast.s21_1))
    return false;
  return true;
};
function XmlNode() {
}
function xmlAttributeValueToQName(value, namespaces) {
  var parts = split(value, [':']);
  var tmp;
  switch (parts.j()) {
    case 1:
      var tmp1_elvis_lhs = namespaces.q2('');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$('No default namespace found');
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }

      tmp = QNameJs_init_$Create$(tmp_0, parts.o(0));
      break;
    case 2:
      var prefix = parts.o(0);
      var tmp2_elvis_lhs = namespaces.q2(prefix);
      var tmp_1;
      if (tmp2_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$('No namespace found for prefix: ' + prefix);
      } else {
        tmp_1 = tmp2_elvis_lhs;
      }

      tmp = new QNameJs(tmp_1, parts.o(1), prefix);
      break;
    default:
      throw IllegalArgumentException_init_$Create$('Invalid QName format: ' + value);
  }
  return tmp;
}
function qNameToXmlAttributeValue(qname, namespaces, defaultNamespaces) {
  var localPart = qname.n21();
  var namespace = qname.o21();
  // Inline function 'kotlin.collections.find' call
  var tmp0 = namespaces.t2();
  var tmp$ret$1;
  $l$block: {
    // Inline function 'kotlin.collections.firstOrNull' call
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      if (element.n2() === namespace) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp0_safe_receiver = tmp$ret$1;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m2();
  var tmp;
  if (tmp1_elvis_lhs == null) {
    // Inline function 'kotlin.collections.find' call
    var tmp0_0 = defaultNamespaces.t2();
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_0 = tmp0_0.g();
      while (_iterator__ex2g4s_0.h()) {
        var element_0 = _iterator__ex2g4s_0.i();
        if (element_0.n2() === namespace) {
          tmp$ret$4 = element_0;
          break $l$block_0;
        }
      }
      tmp$ret$4 = null;
    }
    var tmp2_safe_receiver = tmp$ret$4;
    tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.m2();
  } else {
    tmp = tmp1_elvis_lhs;
  }
  var tmp3_elvis_lhs = tmp;
  var prefix = tmp3_elvis_lhs == null ? getNewKey(namespaces) : tmp3_elvis_lhs;
  // Inline function 'kotlin.collections.set' call
  namespaces.u2(prefix, namespace);
  var tmp_0;
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(prefix) === 0) {
    tmp_0 = localPart;
  } else {
    tmp_0 = prefix + ':' + localPart;
  }
  return tmp_0;
}
function getNewKey(namespaces) {
  var prefix = 'ns';
  var i = 0;
  while (namespaces.o2(prefix + i)) {
    i = i + 1 | 0;
  }
  return prefix + i;
}
function Text_0(text) {
  MutableXmlNode.call(this);
  this.v21_1 = text;
}
protoOf(Text_0).w21 = function () {
  return new Text(this.v21_1);
};
protoOf(Text_0).toString = function () {
  return 'Text(text=' + this.v21_1 + ')';
};
protoOf(Text_0).hashCode = function () {
  return getStringHashCode(this.v21_1);
};
protoOf(Text_0).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Text_0))
    return false;
  var tmp0_other_with_cast = other instanceof Text_0 ? other : THROW_CCE();
  if (!(this.v21_1 === tmp0_other_with_cast.v21_1))
    return false;
  return true;
};
function Element_1(tagName, attributes, children) {
  MutableXmlNode.call(this);
  this.x21_1 = tagName;
  this.y21_1 = attributes;
  this.z21_1 = children;
}
protoOf(Element_1).w21 = function () {
  // Inline function 'kotlin.collections.map' call
  var this_0 = this.z21_1;
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    var tmp$ret$0 = item.w21();
    destination.e(tmp$ret$0);
  }
  return new Element_0(this.x21_1, this.y21_1, destination);
};
protoOf(Element_1).toString = function () {
  return 'Element(tagName=' + this.x21_1 + ', attributes=' + toString(this.y21_1) + ', children=' + toString(this.z21_1) + ')';
};
protoOf(Element_1).hashCode = function () {
  var result = getStringHashCode(this.x21_1);
  result = imul(result, 31) + hashCode(this.y21_1) | 0;
  result = imul(result, 31) + hashCode(this.z21_1) | 0;
  return result;
};
protoOf(Element_1).equals = function (other) {
  if (this === other)
    return true;
  if (!(other instanceof Element_1))
    return false;
  var tmp0_other_with_cast = other instanceof Element_1 ? other : THROW_CCE();
  if (!(this.x21_1 === tmp0_other_with_cast.x21_1))
    return false;
  if (!equals(this.y21_1, tmp0_other_with_cast.y21_1))
    return false;
  if (!equals(this.z21_1, tmp0_other_with_cast.z21_1))
    return false;
  return true;
};
function MutableXmlNode() {
}
function serializeUsingPolyfill(element, namespaces) {
  var sb = StringBuilder_init_$Create$();
  sb.j9('<?xml version="1.0" encoding="UTF-8"?>\n');
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(namespaces.j());
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = namespaces.t2().g();
  while (_iterator__ex2g4s.h()) {
    var item = _iterator__ex2g4s.i();
    // Inline function 'kotlin.collections.component1' call
    var prefix = item.m2();
    // Inline function 'kotlin.collections.component2' call
    var uri = item.n2();
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(prefix) === 0) {
      tmp = to('xmlns', uri);
    } else {
      tmp = to('xmlns:' + prefix, uri);
    }
    var tmp$ret$4 = tmp;
    destination.e(tmp$ret$4);
  }
  var elementWithXmlnsAttributes = element.u21(VOID, plus(toMap(destination), element.r21_1));
  serializeXmlElement(elementWithXmlnsAttributes, sb);
  return sb.toString();
}
function serializeXmlElement(element, out) {
  out.j9('<').j9(element.q21_1);
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = element.r21_1.t2().g();
  while (_iterator__ex2g4s.h()) {
    var _destruct__k2r9zo = _iterator__ex2g4s.i();
    // Inline function 'kotlin.collections.component1' call
    var name = _destruct__k2r9zo.m2();
    // Inline function 'kotlin.collections.component2' call
    var value = _destruct__k2r9zo.n2();
    out.j9(' ').j9(name).j9('="').j9(escapeXml(value)).j9('"');
  }
  if (element.s21_1.q()) {
    out.j9('/>');
    return Unit_instance;
  }
  out.j9('>');
  var _iterator__ex2g4s_0 = element.s21_1.g();
  while (_iterator__ex2g4s_0.h()) {
    var child = _iterator__ex2g4s_0.i();
    if (child instanceof Text)
      out.j9(escapeXml(child.p21_1));
    else {
      if (child instanceof Element_0) {
        serializeXmlElement(child, out);
      } else {
        noWhenBranchMatchedException();
      }
    }
  }
  out.j9('<\/').j9(element.q21_1).j9('>');
}
function escapeXml(text) {
  return replace(replace(replace(replace(replace(text, '&', '&amp;'), '<', '&lt;'), '>', '&gt;'), '"', '&quot;'), "'", '&apos;');
}
function get_domApiIsAvailable() {
  _init_properties_XmlJs_kt__yec0e();
  return domApiIsAvailable;
}
var domApiIsAvailable;
function parseXml(xml) {
  _init_properties_XmlJs_kt__yec0e();
  var tmp;
  if (get_domApiIsAvailable()) {
    tmp = parseXmlUsingDomApi(xml);
  } else {
    tmp = parseXmlUsingPolyfill(xml);
  }
  return tmp;
}
function toXmlString(element, namespaces) {
  _init_properties_XmlJs_kt__yec0e();
  var tmp;
  if (get_domApiIsAvailable()) {
    tmp = serializeUsingDomApi(element, namespaces);
  } else {
    tmp = serializeUsingPolyfill(element, namespaces);
  }
  return tmp;
}
var properties_initialized_XmlJs_kt_ii1iq8;
function _init_properties_XmlJs_kt__yec0e() {
  if (!properties_initialized_XmlJs_kt_ii1iq8) {
    properties_initialized_XmlJs_kt_ii1iq8 = true;
    var tmp = typeof document !== 'undefined' && typeof DOMParser !== 'undefined' && typeof XMLSerializer !== 'undefined';
    domApiIsAvailable = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
  }
}
function parseXmlUsingDomApi(xml) {
  var root = ensureNotNull((new DOMParser()).parseFromString(xml, 'text/xml').documentElement);
  return parseElement(root);
}
function parseElement(element) {
  // Inline function 'kotlin.collections.mutableListOf' call
  var children = ArrayList_init_$Create$_0();
  var inductionVariable = 0;
  var last = element.childNodes.length;
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var child = element.childNodes.item(i);
      var tmp1_subject = child == null ? null : child.nodeType;
      if ((tmp1_subject == null ? null : tmp1_subject) === Node.TEXT_NODE) {
        var tmp2_elvis_lhs = child.textContent;
        children.e(new Text(tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs));
      } else {
        if ((tmp1_subject == null ? null : tmp1_subject) === Node.ELEMENT_NODE) {
          children.e(parseElement(child instanceof Element ? child : THROW_CCE()));
        }
      }
    }
     while (inductionVariable < last);
  // Inline function 'kotlin.collections.mutableMapOf' call
  var attributes = LinkedHashMap_init_$Create$();
  var inductionVariable_0 = 0;
  var last_0 = element.attributes.length;
  if (inductionVariable_0 < last_0)
    do {
      var i_0 = inductionVariable_0;
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var attr = ensureNotNull(element.attributes.item(i_0));
      var tmp2 = attr.nodeName;
      // Inline function 'kotlin.collections.set' call
      var value = ensureNotNull(attr.nodeValue);
      attributes.u2(tmp2, value);
    }
     while (inductionVariable_0 < last_0);
  return new Element_0(element.tagName, attributes, children);
}
function parseXmlUsingPolyfill(xml) {
  // Inline function 'kotlin.js.asDynamic' call
  var parser = new org_cqframework_cql_shared_serializing_Saxes_l1eb5i.SaxesParser();
  var tmp = emptyMap();
  // Inline function 'kotlin.collections.mutableListOf' call
  var tmp$ret$1 = ArrayList_init_$Create$_0();
  var stack = mutableListOf([new Element_1('', tmp, tmp$ret$1)]);
  parser.on('text', parseXmlUsingPolyfill$lambda(stack));
  parser.on('opentag', parseXmlUsingPolyfill$lambda_0(stack));
  parser.on('closetag', parseXmlUsingPolyfill$lambda_1(stack));
  parser.on('error', parseXmlUsingPolyfill$lambda_2);
  parser.write(xml).close();
  if (!(stack.j() === 1)) {
    throw Exception_init_$Create$('Parsing error: Unmatched opening tag(s)');
  }
  var _iterator__ex2g4s = stack.o(0).z21_1.g();
  while (_iterator__ex2g4s.h()) {
    var child = _iterator__ex2g4s.i();
    if (child instanceof Element_1) {
      return child.w21();
    }
  }
  throw Exception_init_$Create$('Parsing error: No root element found');
}
function parseXmlUsingPolyfill$lambda($stack) {
  return function (t) {
    var tmp = last($stack).z21_1;
    return tmp.e(new Text_0((!(t == null) ? typeof t === 'string' : false) ? t : THROW_CCE()));
  };
}
function parseXmlUsingPolyfill$lambda_0($stack) {
  return function (node) {
    var tmp = node.name;
    var tagName = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    var attributesEntries = Object.entries(node.attributes);
    var tmp_0 = new Map(attributesEntries);
    // Inline function 'kotlin.js.collections.toMap' call
    var this_0 = tmp_0 instanceof Map ? tmp_0 : THROW_CCE();
    var attributes = createMapFrom(this_0);
    // Inline function 'kotlin.collections.mutableListOf' call
    var tmp$ret$1 = ArrayList_init_$Create$_0();
    var newElement = new Element_1(tagName, attributes, tmp$ret$1);
    last($stack).z21_1.e(newElement);
    return $stack.e(newElement);
  };
}
function parseXmlUsingPolyfill$lambda_1($stack) {
  return function () {
    var tmp;
    if ($stack.j() < 2) {
      throw Exception_init_$Create$('Parsing error: Unmatched closing tag');
    }
    return $stack.l2($stack.j() - 1 | 0);
  };
}
function parseXmlUsingPolyfill$lambda_2(e) {
  throw Exception_init_$Create$('Parsing error: ' + e.message);
}
function serializeUsingDomApi(element, namespaces) {
  var doc = document.implementation.createDocument(namespaces.q2(substringBefore(element.q21_1, ':', '')), element.q21_1);
  var documentElement = ensureNotNull(doc.documentElement);
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = namespaces.t2().g();
  while (_iterator__ex2g4s.h()) {
    var _destruct__k2r9zo = _iterator__ex2g4s.i();
    // Inline function 'kotlin.collections.component1' call
    var prefix = _destruct__k2r9zo.m2();
    // Inline function 'kotlin.collections.component2' call
    var uri = _destruct__k2r9zo.n2();
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(prefix) === 0) {
      tmp = 'xmlns';
    } else {
      tmp = 'xmlns:' + prefix;
    }
    documentElement.setAttributeNS('http://www.w3.org/2000/xmlns/', tmp, uri);
  }
  exportDomContent(doc, documentElement, element, namespaces);
  return '<?xml version="1.0" encoding="UTF-8"?>\n' + (new XMLSerializer()).serializeToString(doc);
}
function exportDomContent(doc, domElement, element, namespaces) {
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = element.r21_1.t2().g();
  while (_iterator__ex2g4s.h()) {
    var _destruct__k2r9zo = _iterator__ex2g4s.i();
    // Inline function 'kotlin.collections.component1' call
    var name = _destruct__k2r9zo.m2();
    // Inline function 'kotlin.collections.component2' call
    var value = _destruct__k2r9zo.n2();
    domElement.setAttribute(name, value);
  }
  var _iterator__ex2g4s_0 = element.s21_1.g();
  while (_iterator__ex2g4s_0.h()) {
    var child = _iterator__ex2g4s_0.i();
    var tmp;
    if (child instanceof Text) {
      tmp = doc.createTextNode(child.p21_1);
    } else {
      if (child instanceof Element_0) {
        var childElement = doc.createElementNS(namespaces.q2(substringBefore(child.q21_1, ':', '')), child.q21_1);
        exportDomContent(doc, childElement, child, namespaces);
        tmp = childElement;
      } else {
        noWhenBranchMatchedException();
      }
    }
    var childNode = tmp;
    domElement.appendChild(childNode);
  }
}
//region block: exports
export {
  BigDecimalJs_init_$Create$ as BigDecimalJs_init_$Create$2j5anqk1vmlka,
  QNameJs_init_$Create$ as QNameJs_init_$Create$l0zpqpsx1lal,
  Element_0 as Element32h5fxpk08r4q,
  Text as Text1sjjfoh9izuoi,
  jsonStringToQName as jsonStringToQName1kgrt0fccc8s1,
  parseXml as parseXml2aogzaxce2tmq,
  qNameToXmlAttributeValue as qNameToXmlAttributeValue84fsr4g499tw,
  toXmlString as toXmlString308g6eqysvmao,
  xmlAttributeValueToQName as xmlAttributeValueToQName3rsr8ng2sdep8,
};
//endregion

//# sourceMappingURL=shared.mjs.map
