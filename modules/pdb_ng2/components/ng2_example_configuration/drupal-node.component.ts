import { Component, Input } from '@angular/core';

@Component({
    selector: 'drupal-node',
    template: `
        <h3>drupal node</h3>
        
        <div class="node node--type-{{node.type[0].target_id}} node--view-mode-full clearfix" >
        <!--<div class="node node&#45;&#45;type-{{node.type[0].target_id}} node&#45;&#45;view-mode-full clearfix" id="node-{{ node | nid }}" data-nid="{{ node | nid }}"  data-uuid="{{ node.uuid[0].value }}" >-->
            <h3 class="title" >{{ node.title[0].value }}</h3>
            <div class="content">
                <!--<div class="body" ng-bind-html="node.body[0].value | trustAsHtml | drupalBody"></div>-->
        
                <!--<div ng-if="node.field_iframe" class="field&#45;&#45;name-field-iframe field-iframe"><iframe ng-src="{{node.field_iframe[0]['uri'] | trustAsSrc }}" width="{{ node.field_width[0]['value'] }}" height="{{ node.field_height[0]['value'] }}" frameborder="0" style="visibility:hidden;" onload="this.style.visibility='visible';" allowtransparency=”true”></iframe></div>-->
        
                <!--<div ng-repeat="(key, value) in node._embedded">-->
                    <!--<div ng-if="key.indexOf('field_image') > -1">-->
                        <!--<div class="field&#45;&#45;name-field-image field-image" ng-repeat="field in node._embedded[key]"><img class="field-field_image" alt="image" ng-src="{{ field['uri'][0].value | drupalImage }}" /></div>-->
                    <!--</div>-->
                    <!--<div ng-if="key.indexOf('field_file') > -1">-->
                        <!--<div class="field&#45;&#45;name-field-file field-file well" ng-repeat="field in node._embedded[key]"><a ng-href="{{ field['uri'][0].value }}">{{ field['uri'][0].value }}</a></div>-->
                    <!--</div>-->
                <!--</div>-->
            </div>
        </div>
  
        
    <!--<div class="clearfix type {{ node.type }}" id="node-{{ node.nid }}">-->
            <!--<h3 class="title" >{{ node.title }}</h3>-->
            <!--&lt;!&ndash;<div [innerHTML]="node.content | trustAsHtml" class="content"></div>&ndash;&gt;-->
    <!--</div>-->
    `
})
export class DrupalNodeComponent {
    @Input() node: any;

    constructor() {

    }

}

// function drupalNode($templateCache,AppSettings) {
//     var directive = {
//         scope:{
//             nid:'=',
//             template: '='
//         },
//         link: function (scope, element, attrs) {
//             // todo: dynamic node templates
//         },
//         controller: drupalNodeController,
//         controllerAs: 'vm',
//         templateUrl: 'app/components/base-app/drupal/views/node.html'
//         //templateUrl: AppSettings.drupal.path_to_templates+'node.html'
//     };
//     return directive;
// }
// /** @ngInject */
// function drupalNodeTeaser(AppSettings) {
//     var directive = {
//         scope:{
//             nid:'='
//         },
//         controller: drupalNodeController,
//         controllerAs: 'vm',
//         templateUrl: 'app/components/base-app/drupal/views/node-teaser.html'
//     };
//     return directive;
// }

// function drupalNodeController($scope,$log,$element,$attrs,$filter,Drupal) {
//     var vm = this;
//     vm.version = Drupal.version;
//
//     $scope.node = {};
//
//     $scope.$on('init-drupal',function(){
//         vm.version = Drupal.version;
//     });
//
//     $scope.$watch('nid', function() {
//         if($scope.nid == undefined || $scope.nid == ""){
//             return;
//         }
//         getNode($scope.nid);
//     });
//
//     function getNode(id){
//         if(isNaN(id)) {
//             // uuid
//             if(Drupal.model.entities[id]) {
//                 $scope.node = Drupal.getEntity(id);
//             }
//         }else{
//             // nid
//             if (Drupal.model.nodes[id]) {
//                 $scope.node = Drupal.model.nodes[id];
//             } else {
//                 $scope.node = Drupal.node.get({nid: id});
//             }
//         }
//     }
// }


