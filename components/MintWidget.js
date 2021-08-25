import { Box, Flex } from "rebass";
import { useState } from "react";
import styled, { useTheme } from "styled-components";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import Label from "./Label";
import Input from "./Input";
import CircularButton from "./CircularButton";
import { address, abi, price } from "../smartContract";
import { DEFAULT_ERROR_MESSAGE } from "../messages";

export const StyledBox = styled(Box)`
  background-repeat: no-repeat;
  background-position: center center;
  @media (min-width: 1024px) {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const MintWidget = ({ ethAddress }) => {
  const { colors } = useTheme();
  const router = useRouter();
  const [amount, setAmount] = useState(4);

  const handleClick = async () => {
    const web3 = window.web3;
    if (!web3 || !ethAddress) {
      toast.error("Please connect your wallet.");
      if (isMobile) router.push("/mint#connect-wallet");
    } else {
      console.log("else---");
      try {
        const contract = new web3.eth.Contract(abi, address);
        // console.log(contract.methods, '--------methids--------')
        await contract.methods
          .mintKoalas(ethAddress, amount)
          .send(
            { from: ethAddress, value: price * amount },
            async function (error, transactonHash) {
              console.log("transaction hash", transactonHash);
              if (transactonHash)
                toast.info(
                  "Transanction sent to Ethereum Network! Confirmation may take some time."
                );
            }
          );
      } catch (error) {
        console.log("error at contract end", error);
        if (error.message.includes("User denied transaction"))
          toast.error("Oops you have rejected transaction!");
        else toast.error(error.message || DEFAULT_ERROR_MESSAGE);
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length) {
      const parsedVal = parseInt(value);
      if (parsedVal <= 18 && parsedVal > 0) {
        setAmount(parsedVal);
      } else {
        toast.error("Amount should be between 1 and 18.");
      }
    } else {
      setAmount(value);
    }
  };

  return (
    <StyledBox p={[0, 3]} mb={[5]}>
      <Box my={[1]}>
        <Label htmlFor="mint_amount">How many koalas?</Label>
      </Box>
      <Box
        sx={{
          borderBottom: `1px solid ${colors.dark2}`,
          fontSize: [4, 5],
        }}
        mb={[4]}
      >
        <Input
          id="mint_amount"
          name="amount"
          type="number"
          value={amount}
          max={18}
          min={1}
          placeholder="Enter amount"
          style={{ width: "100%" }}
          onChange={handleChange}
        />
      </Box>
      <Flex justifyContent="flex-end">
        <CircularButton onClick={handleClick} disabled={!Boolean(amount)}>
          Mint
        </CircularButton>
      </Flex>
    </StyledBox>
  );
};

export default MintWidget;
