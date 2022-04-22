import { Button, Checkbox, createStyles, Group, Image, Modal, SimpleGrid, Text, UnstyledButton } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { GAME_CONFIG } from '../../gameConfig';
import { nextPlayer } from '../../Store/slices/gameStateSlice';
import calcPrice from '../../Utils/calcPrice';
import checkmark from '../../Images/game/gameicons/PNG/White/1x/checkmark.png'

export default function BuyComponent(props) {
  const [opened, setOpened] = useState(true)
  const [modalTitle, setModalTitle] = useState('Város')
  const { players, currentPlayer, showDiceRoll, showBuyPanel, fields } = props


  const colorCode = players[currentPlayer].colorCode

  // let fromColor = 'from-pink-500'
  // let toColor = 'from-pink-100'

  // if (colorCode === 1) {
  //   fromColor = 'from-blue-500'
  //   toColor = 'from-blue-100'
  // } else if (colorCode === 2) {
  //   fromColor = 'from-green-500'
  //   toColor = 'from-green-100'
  // } else if (colorCode === 3) {
  //   fromColor = 'from-yellow-500'
  //   toColor = 'from-yellow-100'
  // } else {
  //   fromColor = 'from-pink-500'
  //   toColor = 'from-pink-100'
  // }


  const dispatch = useDispatch()

  let playerField = players[currentPlayer].field % 32
  if (playerField === 32) playerField = 0
  const price = calcPrice(playerField, fields[playerField].level, fields)


  useEffect(() => {
    if (showBuyPanel) {

      if ((GAME_CONFIG.map[playerField].isNormal ||
        (GAME_CONFIG.map[playerField].isMuseum && (fields[playerField].ownerColor === null)) ||
        ((currentPlayer === fields[playerField].ownerColor) && players[currentPlayer].money >= calcPrice(playerField, fields[playerField].level + 1).toBuy, fields) ||
        ((currentPlayer !== fields[playerField].ownerColor) && players[currentPlayer].money >= calcPrice(playerField, fields[playerField].level).sellToPlayer, fields) && !GAME_CONFIG.map[playerField].isCorner)
      ) {
        setModalTitle(GAME_CONFIG.map[playerField].label.toUpperCase())
        setOpened(true)
      } else {
        dispatch(nextPlayer())
      }
    } else {
      setOpened(false)
    }
  }, [showBuyPanel])


  const onColseHandler = () => {
    setOpened(false)
    dispatch(nextPlayer())
  }

  return (
    <>
      <Modal
        size="calc(100vw - 20vw)"
        centered
        opened={opened}
        onClose={onColseHandler}
        title={modalTitle}
        transition='slide-up'
        transitionDuration={600}
        transitiontimingfunction='ease'
        closeOnClickOutside={false}
        radius={'lg'}
      >
        {/* Modal content */}
        {/* <SimpleGrid
          cols={4}
          breakpoints={[
            { maxWidth: 'md', cols: 2 },
            { maxWidth: 'sm', cols: 1 },
          ]}
        >

          <ImageCheckbox title={'Level1'} description={'descpLevel1'} image={'https://ui.mantine.dev/_next/static/media/sea.36b2d7d7.png'} key={'Level1'} />
          <ImageCheckbox title={'Level1'} description={'descpLevel1'} image={'https://ui.mantine.dev/_next/static/media/sea.36b2d7d7.png'} key={'Le2vel1'} />
          <ImageCheckbox title={'Level1'} description={'descpLevel1'} image={'https://ui.mantine.dev/_next/static/media/sea.36b2d7d7.png'} key={'Lev4el1'} />
          <ImageCheckbox title={'Level1'} description={'descpLevel1'} image={'https://ui.mantine.dev/_next/static/media/sea.36b2d7d7.png'} key={'Lev3el1'} />
        </SimpleGrid> */}

        <div className="flex justify-center space-x-6 w-auto">
          <LevelSelector id={1} buyed={(fields[playerField].level >= 1) ? true : false} fields={fields} />
          <LevelSelector id={2} buyed={(fields[playerField].level >= 2) ? true : false} fields={fields} />
          <LevelSelector id={3} buyed={(fields[playerField].level >= 3) ? true : false} fields={fields} />
          <LevelSelector id={4} buyed={(fields[playerField].level >= 4) ? true : false} fields={fields} />
        </div>

        <div>Tandíj: {price.tandij}</div>
        <div> Vásárlás {'('} {price.toBuy}</div>
        <div>más játkosok ennyiért vehetik meg: {price.sellToPlayer}</div>

      </Modal>

      {/* <Group position="center">
                <Button onClick={() => setOpened(true)}>Open Modal</Button>
            </Group> */}
    </>
  )
}


function LevelSelector(props) {
  const { id, selected, currentLevel, buyed } = props
  return (
    <>
      <div className={`flex flex-col items-center content-center justify-evenly w-32 h-32  ${!buyed ? 'bg-gradient-to-t from-green-300 to-green-100 hover:border-green-300 border-green-300 border-2' : 'bg-green-400 border-4 border-green-400'} rounded m-3 drop-shadow-md`}>
        <span className='text-3xl'>{id}</span>
        <span className=''>emelet</span>
        {buyed && <img src={checkmark} alt="checkmark" className='absolute' />}
      </div>
    </>
  )
}

