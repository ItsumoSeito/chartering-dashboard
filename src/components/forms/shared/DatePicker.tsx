'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { ControllerRenderProps, useFormContext } from 'react-hook-form';
import { fields } from '../NewRequestForm/fields';

export const DatePicker: React.FC<ControllerRenderProps> = ({
  value,
  onBlur,
}) => {
  const { setValue } = useFormContext();
  const selectHandler = (date?: Date) => {
    setValue(
      fields.requestedDepartureDate,
      date ? format(date, 'MM-dd-yyyy') : undefined
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start text-left font-normal flex hover:bg-slate-300',
            !value && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value || <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value ? new Date(value) : undefined}
          onSelect={selectHandler}
          fromDate={new Date()}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
