-- @main

CreateThread(function ()
    while true do
        local playerId = PlayerId()
        SendNUIMessage({
            talking = MumbleIsPlayerTalking(playerId),
            radio = radio
        })
        Wait(500)
    end
end)

AddEventHandler('pma-voice:setTalkingMode', function(newTalkingRange)
    timeout = (timeout or 0) + 2000
    SendNUIMessage({
        toggleprox = true,
        proximity = newTalkingRange,
        timeout = timeout
    })
end)

AddEventHandler("pma-voice:radioActive", function(radioTalking) 
    radio = radioTalking
end)