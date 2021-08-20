import { Box, Text, Flex } from 'rebass'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { isMobile } from 'react-device-detect'
import Button from './Button'
import Label from './Label'
import Input from './Input'
import CircularButton from './CircularButton'

const StyledBox = styled(Box)`
  /* background-image: linear-gradient(rgb(43, 45, 53) 0%, rgb(23, 25, 33) 100%); */
  background-repeat: no-repeat;
  background-position: center center;
  /* border-radius: 16px; */
  border: 1px solid ${({ theme }) => theme.colors.primary};
`

const address = '0x09e9F2820A24E4C949Ff01E98eD4ef310858c0e0'
const abi = [
  {
    inputs: [{ internalType: 'string', name: 'baseURI', type: 'string' }],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address'
      },
      { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
    ],
    name: 'ApprovalForAll',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    inputs: [],
    name: 'MAX_EAGLES',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'contractURI',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' }
    ],
    name: 'isApprovedForAll',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '_to', type: 'address' },
      { internalType: 'uint256', name: '_count', type: 'uint256' }
    ],
    name: 'mintEagles',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bool', name: 'val', type: 'bool' }],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '_count', type: 'uint256' }],
    name: 'price',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'reserveEagles',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'bytes', name: '_data', type: 'bytes' }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'bool', name: 'approved', type: 'bool' }
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'string', name: 'baseURI', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'uint256', name: 'index', type: 'uint256' }
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
    name: 'walletOfOwner',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'withdrawAll',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  }
]

const MintWidget = ({ ethAddress, containerProps }) => {
  const router = useRouter()
  const [amount, setAmount] = useState(4)
  const [supplyStats, setStats] = useState({})

  useEffect(() => {
    const fetchSupplyStats = async () => {
      const web3 = window.web3
      try {
        if (web3) {
          const contract = new web3.eth.Contract(abi, address)
          // console.log(contract.methods, "--------methids--------");
          const totalSupply = await contract.methods.totalSupply().call()
          const MAX_EAGLES = await contract.methods.MAX_EAGLES().call()
          setStats({ totalSupply, MAX_EAGLES })
        }
      } catch (error) {
        console.log('error at contract end', error)
        toast.error(error.message || 'Something went wrong!')
      }
    }

    if (ethAddress) fetchSupplyStats()
  }, [ethAddress])

  const handleClick = async () => {
    const web3 = window.web3
    if (!web3 || !ethAddress) {
      toast.error('Please connect your wallet.')
      if (isMobile) router.push('/#connect-wallet')
    } else {
      try {
        const contract = new web3.eth.Contract(abi, address)
        // console.log(contract.methods, "--------methids--------");
        await contract.methods
          .mintEagles(ethAddress, amount)
          .send(
            { from: ethAddress, value: 36000000000000000 * amount },
            async function (error, transactonHash) {
              console.log('transaction hash', transactonHash)
              if (transactonHash) toast.info('Transanction hash generated!')
            }
          )
      } catch (error) {
        console.log('error at contract end', error)
        toast.error(error.message || 'Something went wrong!')
      }
    }
  }

  const handleChange = (e) => {
    const value = e.target.value

    if (value.length) {
      const parsedVal = parseInt(value)
      console.log(parsedVal)
      if (parsedVal <= 36 && parsedVal > 0) {
        setAmount(parsedVal)
      } else {
        toast.error('Amount must be between 1 and 36.')
      }
    } else {
      setAmount(value)
    }
  }

  return (
    <StyledBox p={[2, 3]} mb={[5]}>
      {supplyStats.totalSupply && (
        <Box>
          <Text fontSize={[3, 4]} fontFamily='inherit' mb={[4]}>
            {supplyStats.totalSupply} eagles in the sky ,{' '}
            {supplyStats.MAX_EAGLES - supplyStats.totalSupply} yet to take
            flight for the eaglympics. We hired a PhD to show this ratio -
            Professional hole digger.
          </Text>
        </Box>
      )}
      <Box my={[1]}>
        <Label htmlFor='mint_amount'>Amount</Label>
      </Box>
      <Box
        sx={{
          borderBottom: '1px solid rgb(143, 143, 143)',
          fontSize: [4, 5]
        }}
        mb={[4]}
      >
        <Input
          id='mint_amount'
          name='amount'
          type='number'
          value={amount}
          max={36}
          min={1}
          placeholder='Enter amount'
          style={{ width: '100%' }}
          onChange={handleChange}
        />
      </Box>
      <Flex justifyContent='flex-end'>
        <CircularButton>Mint</CircularButton>
      </Flex>
    </StyledBox>
  )
}

export default MintWidget
