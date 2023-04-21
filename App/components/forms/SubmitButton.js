import React from 'react';
import WideButton from '../WideButton';
import { useFormikContext } from 'formik';

function SubmitButton({name, ...otherProps}) {
    const {handleSubmit, touched, errors} = useFormikContext()
    return (
        <WideButton onPress={handleSubmit} errors={errors[name]} touched={touched[name]} {...otherProps}/>
    );
}

export default SubmitButton;