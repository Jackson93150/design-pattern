class Animal {
  constructor(name) {
    this.name = name
  }
}

class Fish extends Animal {
  constructor(name,type) {
    super(name)
    console.log(`New ${type} ${name}`)
  }
}

class CreateAnimal {
  createFish(name, type) {
    switch (type) {
      case 'male':
        return new Fish(name,type)
      case 'female':
        return new Fish(name,type)
      default:
        throw new Error('ERROR UNKNOWN')
    }
  }
}

const creator = new CreateAnimal()

const animal1 = creator.createFish('shark', 'male')
const animal2 = creator.createFish('salmon', 'female')