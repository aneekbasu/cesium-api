import _ from 'lodash'
import {sendResponse} from '../helpers/utils.mjs'
import materialModel from '../models/materials.mjs'
import shortid from 'shortid'

let insert = async (req, res) => {
    let options = req.headers.options
    , materialId = 'MAT-' + shortid.generate()
    , {volume, cost, color, delivery, site} = req.body
    
    try {
        
        if (_.isNil(req.body)) {
            return utils.sendResponse(res, null, 400, 'failure', 'Request Body must not be empty')
        }
        if (_.isNil(volume)) {
            return utils.sendResponse(res, null, 400, 'failure', 'Password cannot be empty')
        }
        if (_.isNil(cost)) {
            return utils.sendResponse(res, null, 400, 'failure', 'Cost cannot be empty')
        }
        if (_.isNil(color)) {
            return utils.sendResponse(res, null, 400, 'failure', 'Color cannot be empty')
        }
        
        req.body.id = materialId
        let material = await materialModel.insert(req.body)
        if (material) {
            return sendResponse(res, material, 200, 'sucess', 'Material inserted')
        } else {
            return sendResponse(res, null, 400, 'failure', 'Material could not be inserted')
        }
    } catch (err) {
        return sendResponse(res, null, 500, 'failure', err.message)
    }  
}

let findOne = async (req, res) => {
    let options = req.headers.options
    try {
        let result = await materialModel.find({id:req.params.id})
        if (result != undefined && result.length != 0) {
            return sendResponse(res, result, 200, 'success')
        } else {
            return sendResponse(res, null, 404, 'failure', 'No Data Available')
        }
    } catch (err) {
        return sendResponse(res, null, 500, 'failure', err.message)
    }  
}

let findMany = async (req, res) => {
    let options = req.headers.options
    try {
        console.log(req.params.id)
        let result = await materialModel.find({site:req.params.id})
        if (result != undefined && result.length != 0) {
            return sendResponse(res, result, 200, 'success')
        } else {
            return sendResponse(res, null, 404, 'failure', 'No Data Available')
        }
    } catch (err) {
        return sendResponse(res, null, 500, 'failure', err.message)
    }  
}

let update = async (req, res) => {
    let options = req.headers.options
    , materialId = 'MAT-' + shortid.generate()
    , {volume, cost, color, delivery, site} = req.body
    
    try {
        
        if (_.isNil(req.body)) {
            return utils.sendResponse(res, null, 400, 'failure', 'Request Body must not be empty')
        }
        if (_.isNil(volume)) {
            return utils.sendResponse(res, null, 400, 'failure', 'Password cannot be empty')
        }
        if (_.isNil(cost)) {
            return utils.sendResponse(res, null, 400, 'failure', 'Cost cannot be empty')
        }
        if (_.isNil(color)) {
            return utils.sendResponse(res, null, 400, 'failure', 'Color cannot be empty')
        }
        
        let materials = await materialModel.update({id:req.params.id},req.body)
        if (materials) {
            return sendResponse(res, null, 200, 'sucess', 'Material updated')
        } else {
            return sendResponse(res, null, 400, 'failure', 'Material could not be updated')
        }
    } catch (err) {
        return sendResponse(res, null, 500, 'failure', err.message)
    }  
}

let deleteOne = async (req, res) => {
    let options = req.headers.options
    try {
        console.log(req.params.id)
        let result = await materialModel.deleteOne({id:req.params.id})
        if (result != undefined && result.length != 0) {
            return sendResponse(res, null, 200, 'success', 'Material deleted')
        } else {
            return sendResponse(res, null, 404, 'failure', 'No material could be found for deletion')
        }
    } catch (err) {
        return sendResponse(res, null, 500, 'failure', err.message)
    }  
}

export default { insert, findOne, findMany, update, deleteOne}