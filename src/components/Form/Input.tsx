import {
    FormControl, 
    FormLabel, 
    Input as ChakraInput, 
    InputProps as ChakraInputProps
} from "@chakra-ui/react";

import InputMask from "react-input-mask";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    mask?: string
}

export function Input({name, label, mask, ...rest}: InputProps) {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>
                {label}
            </FormLabel>}
            <ChakraInput
                as={mask && InputMask}
                mask={mask}
                id={name}
                focusBorderColor='red.500'
                bgColor='gray.900'
                variant='filled'
                _hover={{
                    bgColor: 'gray.900',
                }}
                size='lg'
                {...rest}
            />
        </FormControl>
    );
}