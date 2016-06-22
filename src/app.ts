///<reference path="../typings/angularjs/angular.d.ts"/>

var mediaPlayer = angular.module("MediaPlayer",['ngMedia']);




angular.element(document).ready(()=>{
    angular.bootstrap(document,["MediaPlayer"]);
})