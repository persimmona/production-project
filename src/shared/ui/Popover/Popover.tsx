import { Popover as HPopover } from '@headlessui/react';
import { ReactElement, ReactNode } from 'react';
import { classNames } from 'shared/utils/classNames';
import cls from './Popover.module.scss';

interface PopoverProps {
    trigger: ReactElement;
    children: ReactNode;
    className?: string;
}

export function Popover(props: PopoverProps) {
    const { className, trigger, children } = props;

    return (
        <HPopover className={classNames(cls.popover, {}, [className])}>
            <HPopover.Button className={cls.trigger}>{trigger}</HPopover.Button>

            <HPopover.Panel className={cls.panel}>{children}</HPopover.Panel>
        </HPopover>
    );
}
