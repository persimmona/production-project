import { Popover as HPopover } from '@headlessui/react';
import { ReactElement, ReactNode } from 'react';
import { classNames } from '@/shared/utils/classNames';
import cls from './Popover.module.scss';

interface PopoverProps {
    trigger: ReactElement;
    children: ReactNode;
    className?: string;
}

export function Popover(props: PopoverProps) {
    const { className, trigger, children } = props;

    return (
        <HPopover className={cls.popover}>
            <HPopover.Button className={cls.trigger}>{trigger}</HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, [className])}>{children}</HPopover.Panel>
        </HPopover>
    );
}
