"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Query = void 0;

var _default_syntax = require("./default_syntax");

var _execute_ast = require("./execute_ast");

var _predicate = require("../../../services/predicate");

var _ast_to_es_query_dsl = require("./ast_to_es_query_dsl");

var _ast_to_es_query_string = require("./ast_to_es_query_string");

var _date_value = require("./date_value");

var _ast = require("./ast");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This is the consumer interface for the query - it's effectively a wrapper construct around
 * the AST and some of its related utility functions (e.g. parsing, text representation, executing, etc...)
 * It is immutable - all mutating operations return a new (mutated) query instance.
 */
var Query =
/*#__PURE__*/
function () {
  _createClass(Query, null, [{
    key: "parse",
    value: function parse(text, options) {
      var syntax = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _default_syntax.defaultSyntax;
      return new Query(syntax.parse(text, options), syntax, text);
    }
  }, {
    key: "parseDateValue",
    value: function parseDateValue(value) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      return (0, _date_value.dateValueParser)(format)(value);
    }
  }, {
    key: "isMust",
    value: function isMust(clause) {
      return _ast.AST.Match.isMustClause(clause);
    }
  }, {
    key: "isTerm",
    value: function isTerm(clause) {
      return _ast.AST.Term.isInstance(clause);
    }
  }, {
    key: "isIs",
    value: function isIs(clause) {
      return _ast.AST.Is.isInstance(clause);
    }
  }, {
    key: "isField",
    value: function isField(clause) {
      return _ast.AST.Field.isInstance(clause);
    }
  }]);

  function Query(ast) {
    var syntax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _default_syntax.defaultSyntax;
    var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, Query);

    this.ast = ast;
    this.text = text || syntax.print(ast);
    this.syntax = syntax;
  }

  _createClass(Query, [{
    key: "hasSimpleFieldClause",
    value: function hasSimpleFieldClause(field) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      return this.ast.hasSimpleFieldClause(field, value);
    }
  }, {
    key: "getSimpleFieldClause",
    value: function getSimpleFieldClause(field, value) {
      return this.ast.getSimpleFieldClause(field, value);
    }
  }, {
    key: "removeSimpleFieldClauses",
    value: function removeSimpleFieldClauses(field) {
      var ast = this.ast.removeSimpleFieldClauses(field);
      return new Query(ast, this.syntax);
    }
  }, {
    key: "addSimpleFieldValue",
    value: function addSimpleFieldValue(field, value) {
      var must = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var operator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _ast.Operator.EQ;
      var ast = this.ast.addSimpleFieldValue(field, value, must, operator);
      return new Query(ast, this.syntax);
    }
  }, {
    key: "removeSimpleFieldValue",
    value: function removeSimpleFieldValue(field, value) {
      var ast = this.ast.removeSimpleFieldValue(field, value);
      return new Query(ast, this.syntax);
    }
  }, {
    key: "hasOrFieldClause",
    value: function hasOrFieldClause(field) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      return this.ast.hasOrFieldClause(field, value);
    }
  }, {
    key: "getOrFieldClause",
    value: function getOrFieldClause(field, value) {
      return this.ast.getOrFieldClause(field, value);
    }
  }, {
    key: "addOrFieldValue",
    value: function addOrFieldValue(field, value) {
      var must = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var ast = this.ast.addOrFieldValue(field, value, must);
      return new Query(ast, this.syntax);
    }
  }, {
    key: "removeOrFieldValue",
    value: function removeOrFieldValue(field, value) {
      var ast = this.ast.removeOrFieldValue(field, value);
      return new Query(ast, this.syntax);
    }
  }, {
    key: "removeOrFieldClauses",
    value: function removeOrFieldClauses(field) {
      var ast = this.ast.removeOrFieldClauses(field);
      return new Query(ast, this.syntax);
    }
  }, {
    key: "hasIsClause",
    value: function hasIsClause(flag) {
      return !(0, _predicate.isNil)(this.ast.getIsClause(flag));
    }
  }, {
    key: "getIsClause",
    value: function getIsClause(flag) {
      return this.ast.getIsClause(flag);
    }
  }, {
    key: "addMustIsClause",
    value: function addMustIsClause(flag) {
      var ast = this.ast.addClause(_ast.AST.Is.must(flag));
      return new Query(ast, this.syntax);
    }
  }, {
    key: "addMustNotIsClause",
    value: function addMustNotIsClause(flag) {
      var ast = this.ast.addClause(_ast.AST.Is.mustNot(flag));
      return new Query(ast, this.syntax);
    }
  }, {
    key: "removeIsClause",
    value: function removeIsClause(flag) {
      var ast = this.ast.removeIsClause(flag);
      return new Query(ast, this.syntax);
    }
    /**
     * Executes this query over the given iterable item and returns
     * an new array of all items that matched this query. Options:
     *
     * defaultFields: string[]
     *
     *    An array of field names to match the default clauses against. When not specified, the query
     *    will pick up all the string fields of each record and try to match against those.
     *
     * isClauseMatcher?: (record: any, flag: string, applied: boolean, explain?: []) => boolean
     *
     *    By default the 'is' clauses will try to match against boolean fields - where the flag of the clause
     *    indicates the field name. You can change this behaviour by providing this matcher function for the
     *    is clause. For example, if the object has a `tags` field, one can create a matcher that checks if
     *    an object has a specific tag (e.g. "is:marketing", "is:kitchen", etc..)
     *
     * explain?: boolean
     *
     *    When set to `true`, each item in the returns array will have an `__explain` field that will hold
     *    information about why the objects matched the query (default to `false`, mainly/only useful for
     *    debugging)
     */

  }], [{
    key: "execute",
    value: function execute(query, items) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var q = (0, _predicate.isString)(query) ? Query.parse(query) : query;
      return (0, _execute_ast.executeAst)(q.ast, items, options);
    }
    /**
     * Builds and returns an Elasticsearch query out this query. Options:
     *
     * defaultFields?: string[]
     *
     *    An array of field names to match the default clauses against. When not specified, the query
     *    will pick up all the string fields of each record and try to match against those.
     *
     * isToQuery?: (flag: string, on: boolean) => Object (elasticsearch query object)
     *
     *    By default, "is" clauses will be translated to a term query where the flag is the field
     *    and the "on" value will be the value of the field. This function lets you change this default
     *    translation and provide your own custom one.
     *
     * termValuesToQuery?: (values: string[]) => Object (elasticsearch query object)
     *
     *    By default, "term" clauses will be translated to a "simple_query_string" query where all
     *    the values serve as terms in the query string. This function lets you change this default
     *    translation and provide your own custom one.
     *
     * fieldValuesToAndQuery?: (field: string, values: string[]) => Object (elasticsearch query object)
     *
     *    By default, "field" clauses will be translated to a match query where all the values serve as
     *    terms in the query(the operator is AND). This function lets you change this default translation
     *    and provide your own custom one.
     */

  }, {
    key: "toESQuery",
    value: function toESQuery(query) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var q = (0, _predicate.isString)(query) ? Query.parse(query) : query;
      return (0, _ast_to_es_query_dsl.astToEsQueryDsl)(q.ast, options);
    }
  }, {
    key: "toESQueryString",
    value: function toESQueryString(query) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var q = (0, _predicate.isString)(query) ? Query.parse(query) : query;
      return (0, _ast_to_es_query_string.astToEsQueryString)(q.ast, options);
    }
  }]);

  return Query;
}();

exports.Query = Query;

_defineProperty(Query, "MATCH_ALL", Query.parse(''));