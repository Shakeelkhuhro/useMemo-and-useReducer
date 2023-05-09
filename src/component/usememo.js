import { useMemo } from 'react';

function factorial(n) {
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
}

function Factorial({ value }) {
    const result = useMemo(() => factorial(value), [value]);
    return <div>
        Factorial of {value} is {result}
        </div>;
}

export default Factorial;