'use client';

import React, { useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent } from '@/components/ui/popover';
import { PopoverAnchor, PopoverTrigger } from '@radix-ui/react-popover';
import { Airport } from '@/lib/models/Airport';
import { cn } from '@/lib/utils';
import CloseIcon from '../../../../public/images/close.svg';
import { ControllerRenderProps } from 'react-hook-form';

type Props = {
  airports: Array<Airport>;
  selectHandler: (airport: Airport) => void;
};

type ListItemProps = { airport: Airport; index: number; onClick?: () => void };

const ListItem: React.FC<ListItemProps> = ({ airport, index, onClick }) => {
  const border =
    index === 0 ? undefined : 'border-t border-slate-200 border-solid';

  return (
    <div
      className={cn(
        border,
        'h-10 flex justify-start items-center hover:bg-slate-600 cursor-pointer'
      )}
      onClick={onClick ? onClick : undefined}
    >{`${airport.iataCode} - ${airport.name}`}</div>
  );
};

export const AirportSelector: React.FC<Props> = ({
  airports,
  selectHandler,
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const filteredAirports = airports.filter((airport) => {
    const matchBase =
      airport.name.toLowerCase() +
      airport.iataCode.toLowerCase() +
      airport.countryName.toLowerCase() +
      airport.countryIso.toLowerCase();
    return matchBase.includes(searchTerm.toLowerCase());
  });

  const handleSelect = (airport: Airport) => {
    setOpen(false);
    setSearchTerm(`${airport.name} - ${airport.iataCode}`);
    selectHandler(airport);
  };

  const handleClear = () => {
    selectHandler({
      name: '',
      iataCode: '',
      countryIso: '',
      countryName: '',
    });
    setSearchTerm('');
  };

  useEffect(() => {
    if (searchTerm.length >= 2 && filteredAirports.length > 1) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [filteredAirports.length, searchTerm.length]);

  return (
    <Popover open={open}>
      <PopoverAnchor>
        <div className="relative flex justify-center items-center">
          <Input
            placeholder="Enter origin airport..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <CloseIcon
            width={20}
            height={20}
            className="absolute right-4 cursor-pointer"
            onClick={handleClear}
          />
        </div>
      </PopoverAnchor>
      <PopoverContent className="border-indigo-300 bg-slate-500 text-white bg-opacity-95 max-h-96 scroll overflow-scroll w-96">
        {filteredAirports.map((airport, index) => (
          <ListItem
            key={airport.iataCode}
            airport={airport}
            index={index}
            onClick={() => handleSelect(airport)}
          />
        ))}
      </PopoverContent>
    </Popover>
  );
};
