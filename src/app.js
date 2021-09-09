export const firstName = "Suresh";
export const lastName = "Raju";

export const fullName = () => {
    return `$(firstName) $(lastName)`;
}

const cars = {
        model: 'alpha',
        variant: 'petrol',
        price: 2000000
    }
    //cant use multiple export default
export default cars