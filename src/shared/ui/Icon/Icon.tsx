import { classNames } from '@/shared/utils/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ className, Svg }: IconProps) => {
    return <Svg className={classNames(cls.Icon, {}, [className])} />;
};
