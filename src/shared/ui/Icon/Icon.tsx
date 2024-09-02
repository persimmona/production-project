import { classNames } from '@/shared/utils/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ className, Svg }: IconProps) => {
    return <Svg className={classNames(cls.Icon, {}, [className])} />;
};
