/* eslint no-script-url: 0 */
import React from 'react';

export const Modal = () =>
  (<div className="modal fade" id="modal-vacancy" tabIndex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">
    <div className="modal-dialog modal">
      <div className="modal-content">
        <div className="modal-header">
          Create vacation
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div className="modal-body" >
          <label htmlFor="vacancy-name" className="small">Название должности</label>
          <input type="text" placeholder="название" id="vacancy-name" className="form-control" />

          <label htmlFor="vacancy-eth" className="small">Плата в неделю</label>
          <input type="text" placeholder="палата" id="vacancy-eth" className="form-control" />

          <label htmlFor="vacancy-eth" className="small">Продолжительность (в месяцах)</label>
          <input type="text" placeholder="продолжительность" id="vacancy-dur" className="form-control" />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
          <button type="button" className="btn btn-primary">Сохранить</button>
        </div>
      </div>
    </div>
  </div>);
