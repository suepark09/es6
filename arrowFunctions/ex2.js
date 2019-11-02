// Write an expression that uses an array prototype method (filter, reduce, map, etc.)
//   to compute the total value of the mahines in the inventory array;

const inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
]

// Filter out things that arent machines:

// let machine = 'machine';

let justMachines = inventory.filter(item => {
    return item.type.includes('machine')
} )

console.log(justMachines)

// Calculate the total value of the machines

// let justValues = Object.values(justMachines)
let justValues = justMachines.map(machine => machine.value)
let totalMachineValue = justValues.reduce((total, amount) => {
    return total + amount
})
console.log(totalMachineValue)