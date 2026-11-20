import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { EmptyRowCol } from '.';
import { Style } from './Style';

export function CommonSection({
  title,
  className,
  id,
  children,
}: PropsWithChildren<{ title: string; className?: string; id?: string }>) {
  return (
    <section id={id} className={`resume-section${className ? ` ${className}` : ''}`}>
      <EmptyRowCol>
        <Row className="pb-3 resume-section-heading">
          <Col>
            <h2 className="resume-section-title" style={Style.blue}>
              <span>{title}</span>
            </h2>
          </Col>
        </Row>
        <div className="resume-section-content">{children}</div>
      </EmptyRowCol>
    </section>
  );
}
