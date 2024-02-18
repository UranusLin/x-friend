import { useEffect, useState } from "react";
import ExchangeModal from "./ExchangeModal";
import WithdrawModal from "./WithdrawModal";
import Button from '@mui/material/Button';
import { Stack, Typography } from "@mui/material";

export default function Header() {
  const [userAddress, setUserAddress] = useState('');
  const [userUSDTBalance, setUserUSDTBalance] = useState('');
  const [userXTokenBalance, setUserXTokenBalance] = useState('');

  const [showExchangeModal, setShowExchangeModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  useEffect(() => {
    // call api get user data
    setUserAddress("0x123...");
    setUserUSDTBalance('100');
    setUserXTokenBalance('200');
  }, []);

  return (
    <header>
      <Stack width="100%" direction="row" padding={2}>
        <Stack flex={1}>
          <Typography component="p">Address: {userAddress}</Typography>
          <Typography component="p">USDT Balance: {userUSDTBalance}</Typography>
          <Typography component="p">XToken Balance: {userXTokenBalance}</Typography>
        </Stack>
        <Stack alignSelf="flex-end">
          <Button onClick={() => setShowExchangeModal(true)}>Exchange</Button>
          <Button onClick={() => setShowWithdrawModal(true)}>Withdraw</Button>
        </Stack>
      </Stack>
      {showExchangeModal && <ExchangeModal onClose={() => setShowExchangeModal(false)} />}
      {showWithdrawModal && <WithdrawModal onClose={() => setShowWithdrawModal(false)} />}
    </header>
  );
}