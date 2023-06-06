// let num = 1;
// let i = 1;
// while(i <= 16) {
//     num = num * 2;
//     console.log(num);
//     ++i;
// }

let allCones = Math.floor(Math.random() * 50) + 50;
let customerCones
do
{
        function numberBoughtCones() {
            return Math.floor(Math.random() * 5) + 1;
        }
        customerCones = numberBoughtCones();
        function remainCones(input) {
            if (input > allCones)
            {
                console.log(`Cannot sell you ${input} cones, I only have ${allCones} left.`);
            }
            else
            {
                allCones = allCones - input;
                console.log(`${input} cones sold`);
                // console.log(allCones);
                // console.log(customerCones);
                return allCones;
            }
        }
        remainCones(customerCones);
}
while (allCones > 0);
console.log(`Yay! I sold them all!`);

