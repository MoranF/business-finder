//var Businesses = new Meteor.Collection("Businesses");
//
//function Business(){
//    this.name;
//    this.businessType;
//    this.country;
//    this.state;
//    this.city;
//    this.street;
//}
//
//if (Meteor.isClient) {
//
////    var myBusiness = new Business();
////    myBusiness.name ="Pras dan";
////    myBusiness.businessType ="Gym";
////    myBusiness.country ="Isdael";
////    myBusiness.city ="Teasviv";
////    myBusiness.street ="Ds df aadsfa";
////    myBusiness.state ="asdfdfa";
////
////
////    Businesses.insert(myBusiness);
//
//
//    Template.Businesses.getBusinesses = function(){
//        return Businesses.find({}, {sort: {name: 1}});
//    };
//
//
//    Template.Businesses.events = {
//        "click input.delete" : function(){
//            Businesses.remove(this._id);
//        }
//    };
//
//}
//
//if (Meteor.isServer) {
//  Meteor.startup(function () {
//    // code to run on server at startup
//  });
//}
