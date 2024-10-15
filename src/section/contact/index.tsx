import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import MContainer from "../../component/container";
import theme from "../../theme";
import { Controller, useForm } from "react-hook-form";
import MInput from "../../component/input";
import MTextarea from "../../component/textarea";
import Button from "../../component/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../../store/interface/itf";

const Contact: React.FC = () => {
  const { pxToVw, colors } = theme;
  const [contactValue, setContactValue] = useState<Form>();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    register,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<Form>();

  const onSubmit = (values: any) => {
    const newForm: Form = {
      name: values.name,
      email: values.email,
      phone: values.phone || "",
      note: values.note || "",
    };
    localStorage.setItem("contactValue", JSON.stringify(newForm));
    navigate("/form-confirm");
  };

  useEffect(() => {
    const ctValueString = localStorage.getItem("contactValue");
    if (ctValueString) {
      try {
        const ctValue: Form = JSON.parse(ctValueString);
        if (ctValue.name) {
          setContactValue(ctValue);
          setValue("name", ctValue.name);
          setValue("email", ctValue.email);
          setValue("phone", ctValue.phone || "");
          setValue("note", ctValue.note || "");
        }
      } catch (error) {
        console.error("Failed to parse contactValue:", error);
      }
    }
  }, [contactValue]);

  return (
    <Box pt={pxToVw(35)} pb={pxToVw(100)}>
      <MContainer>
        <Text
          as={"h2"}
          textTransform={"uppercase"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={colors.main}
          mb={pxToVw(11)}
          fontSize={pxToVw(22)}
        >
          CONTACT FORM
        </Text>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <VStack gap={pxToVw(31)}>
            <FormControl isRequired isInvalid={!!errors.name} w={"full"}>
              <FormLabel>Name</FormLabel>
              <MInput
                placeholder="Nguyen Van A"
                {...register("name", {
                  required: "Please Enter This Field",
                })}
              />

              <FormErrorMessage mb={"-12px"}>
                {errors.name?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={!!errors.email} w={"full"}>
              <FormLabel>Email</FormLabel>
              <MInput
                placeholder="abc@gmail.com"
                type="email"
                {...register("email", {
                  required: "Please Enter This Field",
                })}
              />

              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl w={"full"}>
              <FormLabel>Phone Number</FormLabel>
              <MInput
                type="number"
                placeholder="0000 000 000"
                {...register("phone")}
              />
            </FormControl>
            <FormControl w={"full"}>
              <FormLabel>Note</FormLabel>
              <MTextarea
                minH={pxToVw(120)}
                resize={"vertical"}
                placeholder="Enter here"
                {...register("note")}
              />
            </FormControl>
            <Box w={"full"} mt={pxToVw(9)}>
              <Button type="submit">Submit</Button>
            </Box>
          </VStack>
        </form>
      </MContainer>
    </Box>
  );
};

export default Contact;
