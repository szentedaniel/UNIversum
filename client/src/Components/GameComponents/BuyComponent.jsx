import { Button, Checkbox, createStyles, Group, Image, Modal, SimpleGrid, Text, UnstyledButton } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GAME_CONFIG } from '../../gameConfig';
import { buyLand, buyMuseum, nextPlayer, resetCountdown, startQuarantine } from '../../Store/slices/gameStateSlice';
import calcPrice from '../../Utils/calcPrice';
import checkmark from '../../Images/game/gameicons/PNG/White/1x/checkmark.png'
import unavailable from '../../Images/game/gameicons/PNG/White/1x/locked.png'
import museumPic from '../../Images/game/caracters/museum.png'
import formatter from '../../Utils/formatter';

export default function BuyComponent(props) {
  const [opened, setOpened] = useState(true)
  const [modalTitle, setModalTitle] = useState('Város')
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [sajat, setSajat] = useState(false)
  const [nemSajat, setNemSajat] = useState(false)
  const [museum, setMuseum] = useState(false)
  const [price, setPrice] = useState({
    toBuy: null,
    tandij: null,
    sellToBank: null,
    sellToPlayer: null
  })
  const { players, currentPlayer, museumPrice, showBuyPanel, fields } = props


  const colorCode = players[currentPlayer].colorCode


  const dispatch = useDispatch()

  let playerField = players[currentPlayer].field % 32
  if (playerField === 32) playerField = 0

  useEffect(() => {
    setPrice({
      toBuy: calcPrice(playerField, selectedLevel, fields).toBuy - calcPrice(playerField, fields[playerField].level, fields).toBuy,
      tandij: calcPrice(playerField, selectedLevel, fields).tandij,
      sellToBank: calcPrice(playerField, selectedLevel, fields).sellToBank,
      sellToPlayer: calcPrice(playerField, selectedLevel, fields).sellToPlayer,
    })

    return () => {
      setPrice({
        toBuy: null,
        tandij: null,
        sellToBank: null,
        sellToPlayer: null
      })
    }
  }, [selectedLevel])



  useEffect(() => {
    if (showBuyPanel) {
      dispatch(resetCountdown())
      if ((GAME_CONFIG.map[playerField].isNormal) // ha normális mező

      ) {
        if (fields[playerField].level === 4) {
          dispatch(nextPlayer())
        } else {
          if (
            (((currentPlayer === fields[playerField].ownerColor) || (fields[playerField].ownerColor === null)) && (players[currentPlayer].money >= (calcPrice(playerField, fields[playerField].level + 1, fields).toBuy - calcPrice(playerField, fields[playerField].level, fields).toBuy))) // ha saját és van pénz fejlesztésre
          ) {

            setSajat(true)
            console.log('ez normal sajat')
            setModalTitle(GAME_CONFIG.map[playerField].label.toUpperCase())
            setOpened(true)
          } else if ((currentPlayer !== fields[playerField].ownerColor) && (players[currentPlayer].money >= calcPrice(playerField, (fields[playerField].level === 0 ? fields[playerField].level + 1 : fields[playerField].level), fields).sellToPlayer)) // ha nem saját de van pénz megvenni)
          {
            setNemSajat(true)
            console.log('ez normal nem sajat');

            setModalTitle(GAME_CONFIG.map[playerField].label.toUpperCase())
            setOpened(true)
          } else {
            dispatch(nextPlayer())
            setSelectedLevel(null)
          }
        }
      } else if ((GAME_CONFIG.map[playerField].isMuseum && (fields[playerField].ownerColor === null)) && players[currentPlayer].money >= museumPrice) { // ha múzeum ami nincs megvéve és van rá pénz
        setMuseum(true)
        console.log('ez múzeum ami nincs megvéve');

        setModalTitle(GAME_CONFIG.map[playerField].label.toUpperCase())
        setOpened(true)
      } else if (GAME_CONFIG.map[playerField].isCorner) {
        if (GAME_CONFIG.map[playerField].isQuarantaine) {
          if (!players[currentPlayer].isInQuarantine) {
            dispatch(startQuarantine())
          } else {
            dispatch(nextPlayer())
          }
        } else if (GAME_CONFIG.map[playerField].isDoubler) {

        } else if (GAME_CONFIG.map[playerField].isErasmus) {

        } else {  // START
          dispatch(nextPlayer())
        }
      } else if (GAME_CONFIG.map[playerField].isTax) {

      } else {
        dispatch(nextPlayer())
        setSelectedLevel(null)
      }
    } else {
      setOpened(false)
      setSelectedLevel(null)
    }

    return () => {
      setSajat(false)
      setNemSajat(false)
      setMuseum(false)
    }
  }, [showBuyPanel])


  const onColseHandler = () => {
    setOpened(false)
    setTimeout(() => {
      dispatch(nextPlayer())
      setSelectedLevel(null)
    }, 400)
  }

  let popupBody = <></>

  if (sajat) {
    popupBody = <BuyComponentSajat price={price} playerField={playerField} fields={fields} setSelectedLevel={setSelectedLevel} selectedLevel={selectedLevel} players={players} currentPlayer={currentPlayer} onColseHandler={onColseHandler} />
  } else if (nemSajat) {
    popupBody = <BuyComponentNemSajat price={price} playerField={playerField} fields={fields} setSelectedLevel={setSelectedLevel} selectedLevel={selectedLevel} players={players} currentPlayer={currentPlayer} onColseHandler={onColseHandler} />
  } else if (museum) {
    popupBody = <MuseumBuy playerField={playerField} onColseHandler={onColseHandler} />
  }

  return (
    <>
      <Modal
        size="lg"
        // size="calc(100vw - 20vw)"
        centered
        opened={opened}
        onClose={onColseHandler}
        title={modalTitle}
        transition='slide-up'
        transitionDuration={300}
        transitiontimingfunction='ease'
        closeOnClickOutside={false}
        radius={'lg'}
        classNames={{ modal: 'bg-[#F5ECE3]' }}
      //overlayColor={'#F5ECE3'}
      >

        <>
          {popupBody}
        </>





      </Modal>
    </>
  )
}


function MuseumBuy(props) {
  const { onColseHandler, playerField } = props
  const { museumPrice } = useSelector((state) => state.gameState)
  const dispatch = useDispatch()

  const buy = () => {
    onColseHandler()
    dispatch(buyMuseum({
      fieldId: playerField
    }))
  }

  return (
    <>
      <div className="flex justify-center space-x-6 w-auto bg-[#F5ECE3]">
        <div
          className={`flex flex-col items-center content-center justify-evenly w-32 h-32 bg-gradient-to-t from-green-300 to-green-100 hover:border-green-300 border-green-300 border-2 rounded m-3 drop-shadow-md`}>
          <img src={museumPic} alt="museumPic" />
          <span className='text-2xl -mt-5'>{'Museum'}</span>
        </div>
      </div>
      <div className='flex flex-col h-full content-evenly items-center'>
        <div
          onClick={buy}
          className=' cursor-pointer rounded-full w-max p-4 bg-green-300 hover:bg-green-400 shadow-md border-green-100 border-4 m-4 text-2xl'> Vásárlás {'( '} {formatter(museumPrice)} {' )'}</div>
        <div>Minden birtokolt múzeum ennyi összeggel növeli a belépési díjat: <span className='font-extrabold'>{formatter(75000)}</span></div>
      </div>
    </>
  )
}

function BuyComponentNemSajat(props) {
  const { playerField, fields, setSelectedLevel, selectedLevel, price, onColseHandler } = props
  const dispatch = useDispatch()
  const buy = () => {
    onColseHandler()
    dispatch(buyLand({
      ar: price.sellToPlayer,
      fieldId: playerField,
      level: selectedLevel
    }))
  }
  return (
    <>
      <div className="flex justify-center space-x-6 w-auto bg-[#F5ECE3]">
        <LevelSelector id={1} playerField={playerField} fields={fields} setSelectedLevel={setSelectedLevel} selectedLevel={selectedLevel} nemSajat />
        <LevelSelector id={2} playerField={playerField} fields={fields} setSelectedLevel={setSelectedLevel} selectedLevel={selectedLevel} nemSajat />
        <LevelSelector id={3} playerField={playerField} fields={fields} setSelectedLevel={setSelectedLevel} selectedLevel={selectedLevel} nemSajat />
        <LevelSelector id={4} playerField={playerField} fields={fields} setSelectedLevel={setSelectedLevel} selectedLevel={selectedLevel} nemSajat />
      </div>
      <div className='flex flex-col h-full content-evenly items-center'>
        <div className='text-2xl '>Tandíj: {formatter(price.tandij)}</div>
        <div
          onClick={buy}
          className=' cursor-pointer rounded-full w-max p-4 bg-green-300 hover:bg-green-400 shadow-md border-green-100 border-4 m-4 text-2xl'> Vásárlás {'( '} {formatter(price.sellToPlayer)} {' )'}</div>
        <div>Más játkosok ennyiért vehetik meg tőled: {formatter(price.sellToPlayer)}</div>
      </div>
    </>
  )
}


function BuyComponentSajat(props) {
  const { players, currentPlayer, playerField, fields, setSelectedLevel, selectedLevel, price, onColseHandler } = props
  const dispatch = useDispatch()
  const buy = () => {
    onColseHandler()
    dispatch(buyLand({
      ar: price.toBuy,
      fieldId: playerField,
      level: selectedLevel
    }))
  }

  return (
    <>
      <div className="flex justify-center space-x-6 w-auto bg-[#F5ECE3]">
        <LevelSelector id={1} playerField={playerField} fields={fields} setSelectedLevel={setSelectedLevel} selectedLevel={selectedLevel} players={players} currentPlayer={currentPlayer} />
        <LevelSelector id={2} playerField={playerField} fields={fields} setSelectedLevel={setSelectedLevel} selectedLevel={selectedLevel} players={players} currentPlayer={currentPlayer} />
        <LevelSelector id={3} playerField={playerField} fields={fields} setSelectedLevel={setSelectedLevel} selectedLevel={selectedLevel} players={players} currentPlayer={currentPlayer} />
        <LevelSelector id={4} playerField={playerField} fields={fields} setSelectedLevel={setSelectedLevel} selectedLevel={selectedLevel} players={players} currentPlayer={currentPlayer} />
      </div>
      <div className='flex flex-col h-full content-evenly items-center'>
        <div className='text-2xl '>Tandíj: {formatter(price.tandij)}</div>
        <div
          onClick={buy}
          className=' cursor-pointer rounded-full w-max p-4 bg-green-300 hover:bg-green-400 shadow-md border-green-100 border-4 m-4 text-2xl'> Vásárlás {'( '} {formatter(price.toBuy)} {' )'}</div>
        <div>Más játkosok ennyiért vehetik meg tőled: {formatter(price.sellToPlayer)}</div>
      </div>
    </>
  )
}


function LevelSelector(props) {
  const { players, currentPlayer, id, setSelectedLevel, selectedLevel, playerField, fields, nemSajat } = props


  const price = {
    toBuy: calcPrice(playerField, id, fields).toBuy - calcPrice(playerField, fields[playerField].level, fields).toBuy,
    // tandij: calcPrice(playerField, id, fields).tandij,
    // sellToBank: calcPrice(playerField, id, fields).sellToBank,
    // sellToPlayer: calcPrice(playerField, id, fields).sellToPlayer,
  }


  const buyed = (fields[playerField].level >= id) ? true : false

  let available = true
  if (nemSajat) {
    available = id === fields[playerField].level
  } else {
    if (id === 4) {
      available = ((id === 4) && (fields[playerField].level === 3))
    } else {
      available = price.toBuy <= players[currentPlayer].money
    }
  }

  useEffect(() => {
    if (selectedLevel === null)
      if (nemSajat) {
        setSelectedLevel(fields[playerField].level)
      } else setSelectedLevel(fields[playerField].level + 1)
    return () => {
      setSelectedLevel(null)
    }
  }, [])


  const handleClick = () => {
    if (buyed) {
      setSelectedLevel(fields[playerField].level + 1)
    } else if (!available) {

    } else {
      setSelectedLevel(id)
    }
  }
  return (
    <>
      {nemSajat ?
        <>
          {id === fields[playerField].level &&
            <div
              onClick={handleClick}
              className={`flex flex-col items-center content-center justify-evenly w-32 h-32  ${(id <= selectedLevel) ? 'bg-gradient-to-t from-orange-300 to-orange-100 hover:border-orange-300 border-orange-300 border-2' : 'bg-gradient-to-t from-green-300 to-green-100 hover:border-green-300 border-green-300 border-2'} rounded m-3 drop-shadow-md`}>
              <span className='text-3xl'>{id}</span>
              <span className=''>emelet</span>
            </div>
          }
        </>
        :
        <div
          onClick={handleClick}
          className={`flex flex-col items-center content-center justify-evenly w-32 h-32  ${!buyed ? (available ? ((id <= selectedLevel) ? 'bg-gradient-to-t from-orange-300 to-orange-100 hover:border-orange-300 border-orange-300 border-2' : 'bg-gradient-to-t from-green-300 to-green-100 hover:border-green-300 border-green-300 border-2') : 'bg-gray-400 border-4 border-gray-400') : 'bg-green-400 border-4 border-green-400'} rounded m-3 drop-shadow-md`}>
          <span className='text-3xl'>{id}</span>
          <span className=''>emelet</span>
          {buyed && <img src={checkmark} alt="checkmark" className='absolute' />}
          {!available && <img src={unavailable} alt="unavailable" className='absolute' />}
        </div>
      }
    </>
  )
}

