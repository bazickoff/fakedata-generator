import React, { Component } from 'react';
import { colors, singleFieldTypeStyle as styles } from '../styles';
import { StatefulToolTip as ToolTip } from 'react-portal-tooltip';
import { camelCaseToHuman } from '../utility';

export default class extends Component {
  render() {
    const { option, selectedType, onClick } = this.props;
    const isSelectedOption = selectedType === option.value;
    const Field = (
      <div onClick={onClick} id={option.value}>
        <span style={styles.title}>{option.title}</span>
      </div>
    );
    return (
      <div
        key={option.value}
        style={{
          ...styles.body,
          background: isSelectedOption ? colors.primary : colors.ash,
          color: isSelectedOption ? colors.white : undefined
        }}
      >
        <ToolTip
          position="top"
          arrow="center"
          parent={Field}
          style={styles.toolTip}
        >
          <div>
            <div style={styles.tooltipDesc}>
              <p style={styles.tooltipTitle}>Title</p>
              <p style={styles.tooltipValue}>{option.title}</p>
            </div>
            <div style={styles.tooltipDesc}>
              <p style={styles.tooltipTitle}>Namespace</p>
              <p style={styles.tooltipValue}>
                {camelCaseToHuman(option.header)}
              </p>
            </div>
            <div style={styles.tooltipDesc}>
              <p style={styles.tooltipTitle}>Desc</p>
              <p style={styles.tooltipValue}>
                {`Returns a random ${option.title}. ${option.desc
                  ? camelCaseToHuman(option.desc)
                  : ''}`}
              </p>
            </div>
          </div>
        </ToolTip>
      </div>
    );
  }
}
