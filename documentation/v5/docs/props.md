---
sidebar_position: 2
title: Props
---
import CustomInput from '../src/components/Examples/Props/CustomInput'
import Value from '../src/components/Examples/Props/Value'
import DefaultValue from '../src/components/Examples/Props/DefaultValue'
import DisplayType from '../src/components/Examples/Props/DisplayType'
import IsAllowed from '../src/components/Examples/Props/IsAllowed'
import ValueIsNumericString from '../src/components/Examples/Props/ValueIsNumericString'
import OnValueChange from '../src/components/Examples/Props/OnValueChange'
import RenderText from '../src/components/Examples/Props/RenderText'
import Type from '../src/components/Examples/Props/Type'

# Common Props

### customInput `React.Component<any>`

**default**: `null`

This allow supporting custom input components with number format.

```js
import { NumericFormat } from 'react-number-format';
import { TextField } from '@mui/material';

<NumericFormat value={12323} customInput={TextField} />;
```
:::note Example

<CustomInput />
:::

### value `number | string`

**default**: `undefined`

This is the value for the input field. It can be a float number or a formatted string.

:::info
If the value passed is a string representation of the number and any of the format prop has number on it, the `valueIsNumericString` props should be passed as `true`. See [valueIsNumericString](#valueisnumericstring-boolean) for more details
:::

```js
import { NumericFormat } from 'react-number-format';

<NumericFormat value={123} />;
```

:::note Example

<Value value={123} />
:::

### defaultValue `number | string`

**default** : `undefined`

Value to be used as default value if value is not provided.

```js
import { NumericFormat } from 'react-number-format';

<NumericFormat defaultValue="12312" />;
```

:::note Example

<DefaultValue />
:::

### displayType `text | input`

**default**: `input`

If value is `input`, it renders an input element where formatting happens as you type characters. If value is `text`, it renders formatted text in a span tag.

```js
import { NumericFormat } from 'react-number-format';

<NumericFormat displayType="input" value={110} />;
<NumericFormat displayType="text" value={110} />;
```

:::note Example

<DisplayType />
:::


### getInputRef `elm => void`

**default**: `null`

Method to get reference of input, span (based on displayType prop) or the customInput's reference.

```js
import { NumericFormat } from 'react-number-format';
import { useRef } from 'react';

export default function App() {
  let ref = useRef();
  return <NumericFormat getInputRef={ref} />;
}
```

### isAllowed `(values) => boolean`

**default**: `undefined`

A checker function to validate the input value. If this function returns false, the onChange method will not get triggered and the input value will not change.

```js
import { NumericFormat } from 'react-number-format';

const MAX_LIMIT = 1000;

<NumericFormat
  value={11}
  isAllowed={(values) => {
    const { floatValue } = values;
    return floatValue < MAX_LIMIT;
  }}
/>;
```

:::note Example

<IsAllowed />
:::

### valueIsNumericString `boolean`

**default**: false

If value is passed as string representation of numbers (unformatted) and number is used in any format props like in prefix or suffix in numeric format and format prop in pattern format then this should be passed as `true`.

**Note**: Prior to 5.2.0 its was always required to be passed as true when value is passed as string representation of numbers (unformatted).

```js
import { PatternFormat } from 'react-number-format';

<PatternFormat format="+1 (###) ###-####" value="123456789" valueIsNumericString={true} />;
```

:::note Example

<PropValueIsNumericString />
:::


### onValueChange `(values, sourceInfo) => {}`

**default**: undefined

This handler provides access to any values changes in the input field and is triggered only when a prop changes or the user input changes. It provides two arguments namely the [valueObject](quirks#values-object) as the first and the [sourceInfo](quirks#sourceInfo) as the second. The [valueObject](quirks#values-object) parameter contains the `formattedValue`, `value` and the `floatValue` of the given input field. The [sourceInfo](quirks#sourceInfo) contains the `event` Object and a `source` key which indicates whether the triggered change is due to an event or a prop change. This is particularly useful in identify whether the change is user driven or is an uncontrolled change due to any prop value being updated.

:::info
If you are using `values.value` which is non formatted value as numeric string. Make sure to pass valueIsNumericString to be true if any of the format prop has number on it. See [valueIsNumericString](#valueisnumericstring-boolean) for more details.
:::

```js
import { NumericFormat } from 'react-number-format';

<NumericFormat
  value={1234}
  prefix="$"
  onValueChange={(values, sourceInfo) => {
    console.log(values, sourceInfo);
  }}
/>;
```

:::note Example

<OnValueChange />
:::

### renderText `(formattedValue, customProps) => React Element`

**default**: `undefined`

A renderText method useful if you want to render formattedValue in different element other than span. It also returns the custom props that are added to the component which can allow passing down props to the rendered element.

```js
import { NumericFormat } from 'react-number-format';

<NumericFormat
  value={1231231}
  thousandsGroupStyle="lakh"
  thousandSeparator=","
  displayType="text"
  renderText={(value) => <b>{value}</b>}
/>;
```

:::note Example

<RenderText />
:::

### type `string`

**default**: `text`

This allows passing the input type attribute value, Supported types include `text` | `tel` | `password`

```js
import { NumericFormat } from 'react-number-format';

<NumericFormat value={123} type="text" />;
<NumericFormat value={123456} type="tel" />;
<NumericFormat value={1212121} type="password" />;
```

:::note Example

<Type />
:::

### Other Props

- [Numeric Format Props](/docs/numeric_format)
- [Pattern Format Props](/docs/pattern_format)

**Other than this it accepts all the props which can be given to a input or span based on displayType you selected.**
