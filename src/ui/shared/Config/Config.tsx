/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import Switch from '@mui/material/Switch';
import type { SingleValue } from 'react-select';
import Select from 'react-select';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { changeNumberOfColumns, changeOutput, changeTheme } from '../../../store/hackerNewsSlice';
import Button from '../Button/Button';

import ConfigWrapper from './Config.styles';

const options = [
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
];

const CustomStyles = {
  valueContainer: (provided: any) => ({
    ...provided,
    color: '#263238',
  }),
  menuList: (provided: any) => ({
    ...provided,
    color: '#263238',
  }),

};

interface IOption {
  onModal: () => void;
}

const Config: React.FC<IOption> = (props) => {
  const hackerNews = useAppSelector((state) => state.hackerNews);
  const dispatch = useAppDispatch();

  const currentValue = useMemo(() => {
    return options.find((item) => item.value === hackerNews.numberOfColumns);
  }, [hackerNews.numberOfColumns]);

  const onClose = () => {
    props.onModal();
  };

  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };

  const handleChangeOutput = () => {
    dispatch(changeOutput());
  };

  const handleChangeColumns = (newValue: SingleValue<{ value: number; label: string }>) => {
    if (newValue) {
      dispatch(changeNumberOfColumns(newValue.value));
    }
  };

  return (
    <ConfigWrapper>
      <div className="switch-wrapper">
        <div>
          Theme:
          <Switch
            color="default"
            checked={hackerNews.isLightTheme}
            onChange={handleChangeTheme}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          {hackerNews.isLightTheme ? ' light' : ' dark'}
        </div>

        <div>
          Output:
          <Switch
            color="default"
            checked={hackerNews.isMosaic}
            onChange={handleChangeOutput}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          {hackerNews.isMosaic ? ' line by line' : ' mosaic'}
        </div>

        {!hackerNews.isMosaic &&
          (<div className="selector-wrapper">
            <Select
              className="selector"
              onChange={handleChangeColumns}
              value={currentValue}
              options={options}
              styles={CustomStyles}
            />
            columns each
          </div>)
        }
      </div>

      <div className="button-wrapper">
        <Button
          onClick={onClose}
        >
          <div>CLOSE</div>
        </Button>
      </div>
    </ConfigWrapper>
  );
};

export default Config;
