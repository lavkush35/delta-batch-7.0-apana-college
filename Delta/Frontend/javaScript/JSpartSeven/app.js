let studentInfo = {
    name: "Luvkush katara",
    age: 22,
    eng: 95,
    math: 88,
    phy: 98, 
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${studentInfo.name} got avg marks =  ${avg}`);
    }
    
}
