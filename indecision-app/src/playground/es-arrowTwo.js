const user={
    name:"pankaj",
    cities:["chennai","bangalore","pune"],
    printPlacesLived:function(){
        console.log(this.name);
        console.log(this.cities);
       const that=this
        this.cities.forEach(function (city){
            console.log(that.name+" has lived in "+city);
        })

    }
};
user.printPlacesLived();