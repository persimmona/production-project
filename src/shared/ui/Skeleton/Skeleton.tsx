import { classNames } from 'shared/utils/classNames';
import cls from './Skeleton.module.scss';
import { CSSProperties, ReactNode, useCallback, useMemo, useState } from 'react';

interface SkeletonProps {
    variant?: 'rounded' | 'circular' | 'rectangular' | 'text';
    className?: string;
    children?: ReactNode;
    height?: string;
    width?: string;
}

interface BoundsStyle {
    height: string;
    width: string;
}

export const Skeleton = ({ className, children, height, width, variant = 'text' }: SkeletonProps) => {
    const [boundsStyle, setBoundsStyle] = useState<BoundsStyle | undefined>();

    const skeletonRef = useCallback((node: HTMLDivElement) => {
        if (node) {
            const { height, width } = node.getBoundingClientRect();
            setBoundsStyle({ height: height + 'px', width: width + 'px' });
        }
    }, []);

    const styles: CSSProperties | undefined = useMemo(() => (boundsStyle ? { height, width } : boundsStyle), [boundsStyle, height, width]);

    return (
        <div ref={skeletonRef} className={classNames(cls.skeleton, {}, [className, cls[variant]])} style={styles}>
            {children}
        </div>
    );
};
