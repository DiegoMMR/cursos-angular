function classDecorator(contructor: any) {
    return class extends contructor {
        newProperty = 'Aca'
        hello = "kiubo"
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = "adaasd"

    print() {
        console.log(this.myProperty)
    }
}