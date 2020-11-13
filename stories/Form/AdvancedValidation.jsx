import React from 'react';
import { Form, Validations } from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import RadioGroup from '../../components/RadioGroup';

const options = [
  {
    value: 'Tomato sauce',
    label: 'Tomato sauce',
  },
  {
    value: 'Mustard',
    label: 'Mustard',
  },
  {
    value: 'Barbecue sauce',
    label: 'Barbecue sauce',
  },
];

const AdvancedValidation = () => (
  <Form>
    <Input
      name="email"
      label="Required"
      validate={[
        Validations.Required,
        {
          validate: Validations.Email,
          error: 'We need a valid e-mail',
        },
      ]}
    />
    <Input
      name="catho"
      label="This field only accepts Catho as a value"
      validate={({ value }) => (value === 'Catho' ? '' : 'Catho, please')}
    />
    <Checkbox name="check" validate={[Validations.RequiredChecked]} />
    <Checkbox
      name="check-checked"
      checked
      value="UHU"
      validate={[Validations.RequiredChecked]}
    />
    <Checkbox
      name="check-checked-uhu"
      value="UHU"
      validate={[Validations.RequiredChecked]}
    />

    <RadioGroup name="rg" options={options} validate={[Validations.Required]} />

    <Button name="submit" type="submit">
      Submit
    </Button>
  </Form>
);

const AdvancedValidationCode = `<Form>
  <Input
    name="email"
    label="Required"
    validate={[
      Validations.Required,
      {
        validate: Validations.Email,
        error: 'We need a valid e-mail',
      },
    ]}
  />
  <Input
    name="catho"
    label="This field only accepts Catho as a value"
    validate={
      ({ value }) => (value === 'Catho' ? '' : 'Catho, please')
    }
  />
  <Button
    name="submit"
    type="submit"
  >
    Submit
  </Button>
</Form>`;

export { AdvancedValidation as Form, AdvancedValidationCode as Code };
