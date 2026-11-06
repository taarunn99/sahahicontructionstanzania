import { FlowButton, type FlowButtonProps } from "@/components/ui/flow-button";

/**
 * The main call to action. Since 2026-11-06 it is the Flow Button
 * (src/components/ui/flow-button.tsx); this name is kept so every existing
 * call site picked the new button up at once.
 *
 * `variant` and `accent` belonged to the earlier WebGL button and are
 * accepted and ignored: the Flow Button takes its colours from the stage
 * it sits on. The earlier button is still in
 * src/components/ui/specular-button/ and is no longer used.
 */
export type BrandButtonProps = FlowButtonProps & {
  variant?: "solid" | "light" | "dark";
  accent?: string;
};

export function BrandButton({
  variant: _variant,
  accent: _accent,
  ...props
}: BrandButtonProps) {
  void _variant;
  void _accent;
  return <FlowButton {...props} />;
}
