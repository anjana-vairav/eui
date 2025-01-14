import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';
import { EuiDescriptionList, TYPES, ALIGNMENTS } from './description_list';
describe('EuiDescriptionList', function () {
  test('is rendered', function () {
    var component = render(React.createElement(EuiDescriptionList, requiredProps, "Content"));
    expect(component).toMatchSnapshot();
  });
  describe('props', function () {
    describe('listItems', function () {
      test('is rendered as strings and elements', function () {
        var listItems = [{
          title: 'Title 1',
          description: 'Description 1'
        }, {
          title: React.createElement("em", null, "Title 2"),
          description: React.createElement("code", null, "Description 2")
        }, {
          title: 'Title 3',
          description: 'Description 3'
        }];
        var component = render(React.createElement(EuiDescriptionList, {
          listItems: listItems
        }, "listItems will render instead of this content"));
        expect(component).toMatchSnapshot();
      });
    });
    describe('compressed', function () {
      test('is rendered', function () {
        var component = render(React.createElement(EuiDescriptionList, {
          compressed: true
        }));
        expect(component).toMatchSnapshot();
      });
    });
    describe('type', function () {
      TYPES.forEach(function (type) {
        test("".concat(type, " is rendered"), function () {
          var component = render(React.createElement(EuiDescriptionList, {
            type: type
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
    describe('align', function () {
      ALIGNMENTS.forEach(function (alignment) {
        test("".concat(alignment, " is rendered"), function () {
          var component = render(React.createElement(EuiDescriptionList, {
            align: alignment
          }));
          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});