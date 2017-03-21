"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DrupalNodeComponent = (function () {
    function DrupalNodeComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DrupalNodeComponent.prototype, "node", void 0);
    DrupalNodeComponent = __decorate([
        core_1.Component({
            selector: 'drupal-node',
            template: "\n        <h3>drupal node</h3>\n        \n        <div class=\"node node--type-{{node.type[0].target_id}} node--view-mode-full clearfix\" >\n        <!--<div class=\"node node&#45;&#45;type-{{node.type[0].target_id}} node&#45;&#45;view-mode-full clearfix\" id=\"node-{{ node | nid }}\" data-nid=\"{{ node | nid }}\"  data-uuid=\"{{ node.uuid[0].value }}\" >-->\n            <h3 class=\"title\" >{{ node.title[0].value }}</h3>\n            <div class=\"content\">\n                <!--<div class=\"body\" ng-bind-html=\"node.body[0].value | trustAsHtml | drupalBody\"></div>-->\n        \n                <!--<div ng-if=\"node.field_iframe\" class=\"field&#45;&#45;name-field-iframe field-iframe\"><iframe ng-src=\"{{node.field_iframe[0]['uri'] | trustAsSrc }}\" width=\"{{ node.field_width[0]['value'] }}\" height=\"{{ node.field_height[0]['value'] }}\" frameborder=\"0\" style=\"visibility:hidden;\" onload=\"this.style.visibility='visible';\" allowtransparency=\u201Dtrue\u201D></iframe></div>-->\n        \n                <!--<div ng-repeat=\"(key, value) in node._embedded\">-->\n                    <!--<div ng-if=\"key.indexOf('field_image') > -1\">-->\n                        <!--<div class=\"field&#45;&#45;name-field-image field-image\" ng-repeat=\"field in node._embedded[key]\"><img class=\"field-field_image\" alt=\"image\" ng-src=\"{{ field['uri'][0].value | drupalImage }}\" /></div>-->\n                    <!--</div>-->\n                    <!--<div ng-if=\"key.indexOf('field_file') > -1\">-->\n                        <!--<div class=\"field&#45;&#45;name-field-file field-file well\" ng-repeat=\"field in node._embedded[key]\"><a ng-href=\"{{ field['uri'][0].value }}\">{{ field['uri'][0].value }}</a></div>-->\n                    <!--</div>-->\n                <!--</div>-->\n            </div>\n        </div>\n  \n        \n    <!--<div class=\"clearfix type {{ node.type }}\" id=\"node-{{ node.nid }}\">-->\n            <!--<h3 class=\"title\" >{{ node.title }}</h3>-->\n            <!--&lt;!&ndash;<div [innerHTML]=\"node.content | trustAsHtml\" class=\"content\"></div>&ndash;&gt;-->\n    <!--</div>-->\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], DrupalNodeComponent);
    return DrupalNodeComponent;
}());
exports.DrupalNodeComponent = DrupalNodeComponent;
//# sourceMappingURL=drupal-node.component.js.map