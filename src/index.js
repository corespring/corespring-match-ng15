import _ from 'lodash'
import CorespringNg15Element from 'corespring-legacy-component-dependencies/support/corespring-ng15-element'
import 'corespring-legacy-match'

export default class CorespringFunctionEntryNg15Element extends CorespringNg15Element {
  _legacyHtml(){
    return '<match id="' + this.getAttribute('pie-id') + '"></match>';
  }
}
