import {
  Box,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Textarea,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import CustomInput from '~/lib/components/CustomInput';

const Profile = () => {
  return (
    <Box color="#979797" margin="auto" width="calc(100vw - 600px)">
      <Grid gap="1rem" templateColumns="1fr 1fr">
        <GridItem>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <CustomInput placeholder="Enter your full name" />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl>
            <FormLabel>Mobile Number</FormLabel>
            <CustomInput type="tel" placeholder="Enter your mobile number" />
          </FormControl>
          <Checkbox colorScheme="brand" marginTop="10px">
            also on whatsApp
          </Checkbox>
        </GridItem>
      </Grid>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <CustomInput type="email" placeholder="Enter your email" />
      </FormControl>

      <Grid marginTop="1rem" gap="1rem" templateColumns="1fr 1fr">
        <GridItem>
          <FormControl>
            <FormLabel>City</FormLabel>
            <CustomInput placeholder="Enter your city" />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl>
            <FormLabel>State</FormLabel>
            <CustomInput placeholder="Enter your state" />
          </FormControl>
        </GridItem>
      </Grid>

      <FormControl marginTop="1rem">
        <FormLabel>Available for Projects</FormLabel>
        <RadioGroup display="flex" gap="1rem" defaultValue="yes">
          <Radio value="yes">Yes</Radio>
          <Radio value="religious">Only for Religious</Radio>
          <Radio value="no">No</Radio>
        </RadioGroup>
      </FormControl>

      <FormControl marginTop="1rem">
        <FormLabel>Profession</FormLabel>
        <Select placeholder="Select your profession">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options as needed */}
        </Select>
      </FormControl>

      {/* Allow Contacts Visibility Toggle */}
      <FormControl>
        <FormLabel>Allow Contacts to be Visible for Everyone</FormLabel>
        <Switch size="lg" />
      </FormControl>

      {/* Website */}
      <FormControl>
        <FormLabel>Website</FormLabel>
        <Input type="url" placeholder="Enter your website URL" />
      </FormControl>

      {/* LinkedIn */}
      <FormControl>
        <FormLabel>LinkedIn</FormLabel>
        <Input type="url" placeholder="Enter your LinkedIn profile URL" />
      </FormControl>

      {/* Other Links (Textarea for multiple links) */}
      <FormControl>
        <FormLabel>Other Links</FormLabel>
        <Textarea placeholder="Enter other relevant links" />
      </FormControl>
    </Box>
  );
};

export default Profile;
