/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { ComponentProps, MouseEvent, ReactNode } from 'react';

// @ts-expect-error Untyped import. See `decisions/imports-ts-suppressions.md`.
import { BpkButtonLink } from '../../bpk-component-link';

import { BAR_STYLES, type BarStyle } from './BpkNavigationBar';

export interface Props extends ComponentProps<BpkButtonLink> {
  children: ReactNode,
  onClick: (event: MouseEvent<HTMLElement>) => void,
  className?: string,
  barStyle?: BarStyle,
  [rest: string]: any; // Inexact rest. See decisions/inexact-rest.md
}

const BpkNavigationBarButtonLink = ({
  barStyle = BAR_STYLES.default,
  children,
  className,
  ...rest
}: Props) => (
  <span className={className}>
    <BpkButtonLink
      alternate={barStyle === BAR_STYLES.onDark}
      {
        ...rest
      }
    >
      {children}
    </BpkButtonLink>
  </span>
);

export default BpkNavigationBarButtonLink;
