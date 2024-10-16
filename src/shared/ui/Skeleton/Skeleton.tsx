import { CSSProperties, ReactNode, useCallback, useMemo, useState } from 'react';

import { classNames } from '@/shared/utils/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
    variant?: 'rounded' | 'circular' | 'rectangular' | 'text';
    className?: string;
    children?: ReactNode;
    height?: string;
    width?: string;
    style?: CSSProperties;
}

interface BoundsStyle {
    height: string;
    width: string;
}

export const Skeleton = ({ className, children, height, width, variant = 'text', style }: SkeletonProps) => {
    const [boundsStyle, setBoundsStyle] = useState<BoundsStyle | undefined>();

    const skeletonRef = useCallback((node: HTMLDivElement) => {
        if (node) {
            const { height, width } = node.getBoundingClientRect();
            setBoundsStyle({ height: height + 'px', width: width + 'px' });
        }
    }, []);

    const styles: CSSProperties | undefined = useMemo(() => (boundsStyle ? { height, width } : boundsStyle), [boundsStyle, height, width]);

    return (
        <span ref={skeletonRef} className={classNames(cls.skeleton, {}, [className, cls[variant]])} style={{ ...style, ...styles }}>
            {children}
        </span>
    );
};
