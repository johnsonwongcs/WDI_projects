function InsultCtrl(insultService) {
   this.insult = '';
   this.insultService = insultService;
}

angular.module('insultApp').controller('InsultCtrl', InsultCtrl);

InsultCtrl.prototype.replaceInsult = function () {
return this.insult = this.insultService.generateInsult();
}