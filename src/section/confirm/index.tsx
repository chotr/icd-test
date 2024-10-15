import {
  Box,
  Button as CButton,
  Flex,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import MContainer from "../../component/container";
import theme from "../../theme";
import { Form } from "../../store/interface/itf";
import { useEffect, useState } from "react";
import Button from "../../component/button";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormApi } from "../../hooks/useFormApi";

const ConfirmSection: React.FC = () => {
  const { pxToVw, colors } = theme;
  const [contactValue, setContactValue] = useState<Form>();
  const navigate = useNavigate();

  useEffect(() => {
    const ctValueString = localStorage.getItem("contactValue");
    if (ctValueString) {
      try {
        const ctValue: Form = JSON.parse(ctValueString);
        if (ctValue.name) {
          setContactValue(ctValue);
        }
      } catch (error) {
        console.error("Failed to parse contactValue:", error);
      }
    }
  }, [contactValue]);

  const postFormApi = useFormApi();
  const handleSubmit = () => {
    if (contactValue) {
      postFormApi.mutate(contactValue, {
        onSuccess: () => {
          localStorage.removeItem("contactValue");
          navigate("/success");
        },
        onError: (error) => {
          alert("Failed to submit form:" + error);
          console.error("Failed to submit form:", error);
        },
      });
    }
  };
  return (
    <Box as={"section"} pt={pxToVw(35)} pb={pxToVw(100)} minHeight={"90vh"}>
      <MContainer>
        <Text
          as={"h2"}
          textTransform={"uppercase"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={colors.main}
          mb={pxToVw(14)}
          fontSize={pxToVw(22)}
        >
          CHECK YOUR INPUT
        </Text>

        <VStack gap={pxToVw(18)} mb={pxToVw(40)}>
          <Box
            w={"full"}
            pb={pxToVw(19)}
            borderBottom={`${pxToVw(1)} solid ${colors.gray01}`}
          >
            <Text
              fontSize={pxToVw(14)}
              color={colors.black01}
              fontWeight={"medium"}
              mb={pxToVw(3)}
            >
              Name
            </Text>
            <Text fontSize={pxToVw(14)} color={colors.black01} mb={pxToVw(3)}>
              {contactValue?.name}
            </Text>
          </Box>
          <Box
            w={"full"}
            pb={pxToVw(19)}
            borderBottom={`${pxToVw(1)} solid ${colors.gray01}`}
          >
            <Text
              fontSize={pxToVw(14)}
              color={colors.black01}
              fontWeight={"medium"}
              mb={pxToVw(3)}
            >
              Mail
            </Text>
            <Text fontSize={pxToVw(14)} color={colors.black01} mb={pxToVw(3)}>
              {contactValue?.email}
            </Text>
          </Box>
          <Box
            w={"full"}
            pb={pxToVw(19)}
            borderBottom={`${pxToVw(1)} solid ${colors.gray01}`}
          >
            <Text
              fontSize={pxToVw(14)}
              color={colors.black01}
              fontWeight={"medium"}
              mb={pxToVw(3)}
            >
              Phone Number
            </Text>
            <Text fontSize={pxToVw(14)} color={colors.black01} mb={pxToVw(3)}>
              {contactValue?.phone}
            </Text>
          </Box>
          <Box
            w={"full"}
            pb={pxToVw(19)}
            borderBottom={`${pxToVw(1)} solid ${colors.gray01}`}
          >
            <Text
              fontSize={pxToVw(14)}
              color={colors.black01}
              fontWeight={"medium"}
              mb={pxToVw(3)}
            >
              Note
            </Text>
            <Text fontSize={pxToVw(14)} color={colors.black01} mb={pxToVw(3)}>
              {contactValue?.note}
            </Text>
          </Box>
        </VStack>
        <Flex gap={pxToVw(20)}>
          <Link
            as={NavLink}
            to={"/form-contact"}
            borderRadius={pxToVw(30)}
            h={pxToVw(44)}
            minW={pxToVw(165)}
            flex={1}
            className="button2"
            borderColor={colors.main}
            color={colors.main}
            fontSize={pxToVw(15)}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"medium"}
            textTransform={"uppercase"}
          >
            Edit
          </Link>
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </Flex>
      </MContainer>
    </Box>
  );
};

export default ConfirmSection;
